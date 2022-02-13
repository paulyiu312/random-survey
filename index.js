/**
 * 创建一个可以将文件翻译成文件流的对象。
 * ActiveXObject带有三个参数：
 * 1.文件绝对路径;
 * 2.文件读写权限(1只读、2只写、3追加);
 * 3.允许新建则为true 相反为false；
 */   
var fso = new ActiveXObject(Scripting.FileSystemObject);
var f   = fso.createtextfile(“count.txt”,2,true); 

/**
 * 1. Write（不再写入数据末尾添加新换行符） 
 * 2. WriteLine（要在最后添加一个新换行符） 
 * 3. WriteBlankLines（增加一个或者多个空行） 
*/
f.writeLine("Hello Word!");  //写入内容
f.close(); //关闭对象
if (urls.length > 0){
  window.location.href = urls[Math.floor(Math.random() * urls.length)]
}
  
