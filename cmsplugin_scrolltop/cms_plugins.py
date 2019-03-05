from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin


@plugin_pool.register_plugin
class ScrollTopPlugin(CMSPluginBase):
    model = CMSPlugin
    render_template = "scroll_top_plugin/scroll-top.html"
    cache = False
