//JS conversion of code from https://github.com/dries007/Dries007.net
//used with the permission of the original Author
function service(name, port, url, host)
{
         
         
         
         
         
        
        
        
        this.check_port = function ()
        {
                var conn = fsockopen(this.host, this.port, var errno, var errstr, 0.5);
                if (conn) 
                {
                        fclose(conn);
                        return true;
                }
                else
                        return false;
        };


        
        this.makeButton = function ()
        {
                var icon = '<i class="fa fa-'  + "" +  (this.status ? 'check' : 'times')  + "" +  ' fa-fw"></i>';
                var btn = this.status ? 'success' : 'warning';
                var prefix = this.url == "" ? '<button class="btn btn-xs btn-'  + "" +  btn  + "" +  ' disabled">' : '<a href="'  + "" +  this.url  + "" +  '" class="btn btn-xs btn-'  + "" +  btn  + "" +  '">';
                var txt = this.status ? 'Online' : 'Offline';
                var suffix = this.url == "" ? '</button>' : '</a>';
                
                return prefix  + "" +  icon  + "" +  " "  + "" +  txt  + "" +  suffix;
        };


this.name = null;
this.port = null;
this.url = null;
this.host = null;
this.status = null;

		if(typeof url === "undefined"){
			url =   "";
		}

		if(typeof host === "undefined"){
			host =   "localhost";
		}

                this.name = name;
                this.port = port;
                this.url = url;
                this.host = host;
                
                this.status = this.check_port();
        }






									