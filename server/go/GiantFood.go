package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	tls "github.com/refraction-networking/utls"
)

func main() {
	req, err := http.NewRequest("GET", "giantfood", nil)
	req.Header = http.Header{
		"sec-ch-ua":                 {"\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\""},
		"sec-ch-ua-mobile":          {"?0"},
		"upgrade-insecure-requests": {"1"},
		"user-agent":                {"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"},
		"accept":                    {"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"},
		"sec-fetch-site":            {"none"},
		"sec-fetch-mode":            {"navigate"},
		"sec-fetch-user":            {"?1"},
		"sec-fetch-dest":            {"document"},
		"accept-encoding":           {"gzip, deflate, br"},
	}

	var client = &http.Client{
		Timeout:   time.Second * 30,
		Transport: NewBypassJA3Transport(tls.HelloChrome_102),
	}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(resp.StatusCode)
		body, _ := ioutil.ReadAll(resp.Body)
		fmt.Println(string(body))
	}
}
