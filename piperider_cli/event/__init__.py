import os
import uuid
from ruamel import yaml
from piperider_cli.workspace import Configuration
from piperider_cli.event.collector import Collector

PIPERIDER_USER_HOME = os.path.expanduser('~/.piperider')
PIPERIDER_USER_PROFILE = os.path.join(PIPERIDER_USER_HOME, 'profile.yml')

_collector = Collector()
_yml = yaml.YAML()


def init():
    api_key = os.environ.get('PIPERIDER_EVENT_API_KEY', None)
    user_profile = None

    if not os.path.exists(PIPERIDER_USER_PROFILE):
        user_profile = _generate_user_profile()
    else:
        with open(PIPERIDER_USER_PROFILE, 'r') as f:
            user_profile = _yml.load(f)
            if user_profile.get('user_id') is None:
                user_profile = _generate_user_profile()

    _collector.set_api_key(api_key)
    _collector.set_user_id(user_profile.get('user_id'))


def _generate_user_profile():
    try:
        os.makedirs(PIPERIDER_USER_HOME, exist_ok=True)
    except Exception:
        # TODO: should show warning message but not raise exception
        print('Please disable command tracking to continue.')
        exit(1)

    user_id = uuid.uuid4().hex
    with open(PIPERIDER_USER_PROFILE, 'w+') as f:
        _yml.dump({'user_id': user_id, 'anonymous_tracking': True}, f)
    return dict(user_id=user_id, anonymous_tracking=True)


def _obtain_project_info(datasource=None):
    try:
        datasource_types=[]
        project_type = '-'
        configuration = Configuration.load()
        for ds in configuration.dataSources:
            if datasource and ds.name != datasource:
                continue
            dbt = ds.args.get('dbt')
            if project_type == '-' and dbt is not None:
                project_type = 'dbt'
            datasource_types.append(ds.type_name)
        return dict(
            project_id=configuration.get_id(),
            project_type=project_type,
            datasource_types=datasource_types,
        )
    except:
        return {}

def log_event(command, params, status):
    with open(PIPERIDER_USER_PROFILE, 'r') as f:
        user_profile = _yml.load(f)
    # TODO: default anonymous_tracking to false if field is not present
    tracking = user_profile.get('anonymous_tracking', False)
    tracking = tracking and isinstance(tracking, bool)
    if not tracking:
        return

    if not _collector.is_ready():
        return

    ds = params.get('datasource')
    project_info = _obtain_project_info(datasource=ds)
    prop = dict(
        **project_info,
        command=command,
        status=status,
    )
    _collector.log_event(prop, 'usage')
    whitelist = ['run', 'generate-report', 'compare-report']
    if command in whitelist or status == False:
        _collector.send_events_if_ready()
