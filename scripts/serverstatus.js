//JS conversion of code from https://github.com/dries007/Dries007.net
//used with the permission of the original Author											<?

if (strpos(strtolower(PHP_OS), "win") === false)
        var loads = sys_getloadavg();

if ((var _GET["progressbars"]))
{
    document.write( json_encode(getPBObject()));
    ();
}

function getPBObject ()
{
        var load["1 min"] = getLoad(0);
            load["5 min"] = getLoad(1);
            load["15 min"] = getLoad(2);
        var response["load"] = load;
        
    response["ram"] = getFreeRam();
    
        var disk["Root"] = getDiskspace("/");
            disk["Data"] = getDiskspace("/data");
    response["disk"] = disk;
    
    return response;
}
        
function getSystemMemInfo ()
{       
    var data = explode("\n", file_get_contents("/proc/meminfo"));
    var meminfo = {};
    for (var lineKey in data) {		
                 var line = data[lineKey];
            (var key, var val) = explode(":", line);
            meminfo[key] = trim(val);
    }
    return meminfo;
}

function getFreeRam ()
{
        var sysInfo = getSystemMemInfo();
        var free = intval(str_replace(" kb", "", sysInfo['MemFree']));
        var total = intval(str_replace(" kb", "", sysInfo['MemTotal']));
        var ramUsed =  total - free;
        return sprintf('%.0f',(ramUsed / total) * 100);
}

function getDiskspace (dir)
{
        var df = disk_free_space(dir);
        var dt = disk_total_space(dir);
        var du = dt - df;
        return sprintf('%.0f',(du / dt) * 100);
}

function getLoad (id)
{
        return 100 * var GLOBALS['loads'][id];
}
									
