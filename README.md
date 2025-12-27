#APK反编译器API

这是一个用于反编译和重新编译APK文件的API服务。`AndroidManifest.xml`从一个安装包，修改它，然后用新的清单重新编译该安装包。

##功能

- **提取AndroidManifest.xml**：上传安装包文件并获取`AndroidManifest.xml`内容。
- **重新编译安装包**：修改后`AndroidManifest.xml`，您可以上传以重新编译安装包。

##如何使用

###1.提取舱单
-端点：`/api/extractManifest`
-方法：邮件
-参数：`apkFile`(安装包文件)
-描述：上传您的安装包档案以撷取`AndroidManifest.xml`.

###2.重新编译安装包
-端点：`/api/重新编译`
-方法：邮件
-参数：`modifiedManifest`(已修改`AndroidManifest.xml`文件)
-描述：上传修改后的`AndroidManifest.xml`重新编译安装包。

##设置和安装

1.克隆此存储库：
