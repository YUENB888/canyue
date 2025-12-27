Const表达=需要('快递')；
常量穆尔特=要求('骡子')；
ConstFS=必需的('fs')；
Const路径=必需的('路径')；
ConstAdmZip=必需的('adm-zip')；

Const应用程序=表达()；

常数上载=穆尔特({dest：'/tmp/'})；

应用程序.使用(表达.JSON())；
应用程序.使用(表达.静态的('public'))；

应用程序。发布('/api/extractManifest'，上传。单一('apkFile')，(req，res)=>{
如果(！req.文件){
返回res.状态(400).JSON({错误："没有上传文件。"})；
  }

尝试{
Const拉链=新的AdmZip(req.文件.路径)；
ConstxmlEntry=拉链.GetEntry("AndroidManifest.xml")；

如果(！xmlEntry){
返回res.状态(404).JSON({错误："在APK中找不到清单XML."})；
    }

Constxmldata=xmlEntry.getData().toString("utf8")；
res.JSON({表明:xmldata})；
}渔获物(e){
res.状态(500).JSON({错误："无法提取APK。"})；
  }
});

应用程序.听(3000，()=>控制台.日志("API在端口3000上运行"))；
