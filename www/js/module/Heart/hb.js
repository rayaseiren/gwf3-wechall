function gwf_heartbeat(ms)
{
	var id = document.getElementById('wc_heartbeat') ? 'wc_heartbeat' : 'gwf_heartbeat';
	var url = GWF_WEB_ROOT+'index.php?mo=Heart&me=Beat&time='+new Date().getTime();
	if (id === 'wc_heartbeat') {
		url += '&wc_header=1';
	}
	setTimeout('gwf_heartbeat('+ms+');', ms);
	ajaxUpdate(id, url);
}
