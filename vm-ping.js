vmNameWithDomain = vmName + "." + domainName;
cmd = "ping -q -c 1 " + vmNameWithDomain;
pingCommand = new Command(cmd);
pingCommand.execute(true);
System.log("Ping sonucu: " + pingCommand.output + " " + pingCommand.result);
if (pingCommand.result == 0){
    return "Pingleme basarili!";
}else{
    return "Pingleme basarisiz";
}
