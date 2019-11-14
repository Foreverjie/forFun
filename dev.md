# markdown
preview: ctrl+shift+v

# virtualenv

`pip install virtualenv`

选择一个用来存放虚拟环境的文件，如D:/python3
```
cd D:python3  # 进入该文件
virtualenv envname   # 创建一个名字为envname的虚拟环境
dir     # 查看当前目录可以知道一个envname的文件已经被创建

virtualenv -p python2 envname  # 如果安装了多个python版本，如py2和py3，需要指定使用哪个创建虚拟环境

# 进入虚拟环境文件
cd envname
# 进入相关的启动文件夹
cd Scripts

activate  # 启动虚拟环境
deactivate # 退出虚拟环境
```
# mysql
1. 忘记密码
   - mysqld --shared-memory --skip-grant-tables”，（注意：一定要有–shared-memory，否则无法正常设置–skip-grant-tables并启动mysql服务），正常情况下，输完这条命令，该命令行窗口应该卡住不动。
   - 重置root密码为空（注意：这里需先置为空密码，否则无法登陆）：在第三步的cmd窗口中输入命令：update mysql.user set authentication_string='' where User='root';
   - 退出所有命令行，重新登陆数据库，使用如下命令重新修改root密码：alter user 'root'@'localhost' identified by 'zzj123,.';