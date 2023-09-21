package main

import (
	"fmt"
	"time"
	"math/rand"
)

//定义一个求整形长度的函数
func intlen (x int) int {
	var y int
	for y = 0; x != 0; y ++{
		x /= 10
	}
	return y
}

//定义随机生成一个6位数字符串的函数
func GetCaptcha () string {
	//取0~99999的伪随机数
	x := int(rand.New(rand.NewSource(time.Now().UnixNano())).Int31n(100000))

	//补齐可能因不满6位数出现的空位
	result := ""
	len := intlen(x)
	zeronum:= 6 - len
	y := fmt.Sprintf("%d", x)
	for i := 0; i < zeronum; i ++{
		result += "0" 
	}
	result += y
	return result
}

func main(){
	//获取手机号
	var tel, reaction int
	var captcha_input, captcha string
	TEL : fmt.Println("这是一个模拟手机验证码登录的程序\n请输入您的手机号：")
	n1, err1 := fmt.Scanln(&tel)
	tellen := intlen(tel)
	if (n1 == 1 && err1 == nil && tellen == 11) {      // 判断输入手机号是否正确
		//获取用户命令
		time_captcha := time.Now().Unix() - 9999
		STRUCTION : fmt.Println("请输入“1”或“2”进行下列操作：\n1.输入验证码登录 2.获取验证码")
		fmt.Scanln(&reaction)

		//判断用户命令并执行相应的操作
		if (reaction == 1){
			fmt.Println("请输入验证码：")
			fmt.Scanln(&captcha_input)

			//判断验证码是否正确和是否在有效期5分钟内
			time_login := time.Now().Unix()
			if (captcha_input == captcha && time_login - time_captcha <= 300) {
				fmt.Println("登录成功！")
			} else if (captcha_input == captcha && time_login - time_captcha > 300){
				fmt.Println("验证码失效，请重新获取验证码并登录")
			} else {
				fmt.Println("登录失败，请输入正确的验证码")
				goto STRUCTION
			}
			}else if (reaction == 2){
			time_get := time.Now().Unix() 
			if (time_get - time_captcha >= 60){ //判断两次获取验证码时间间隔是否超过60s
				captcha = GetCaptcha()
				fmt.Println("您的验证码为:" + captcha)
				time_captcha = time.Now().Unix()
				goto STRUCTION
			} else {
				fmt.Println("60s内已获取验证码，无法重新获取")
				goto STRUCTION
			}
		} else {
			fmt.Println("未知操作，程序已关闭")
		}
	} else {
		fmt.Println("请输入正确的手机号！")
		goto TEL
	}
}
