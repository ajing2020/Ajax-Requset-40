const request = new XMLHttpRequest();
let n = 1;
getPage.onclick = () => {
    request.open('GET', `/db/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                if (n + 1 <= 3) {
                    const array = JSON.parse(request.response)
                    array.forEach(item => {
                        const li = document.createElement('li')
                        li.innerHTML = item.id
                        xxx.appendChild(li)
                    })
                    n += 1
                }
            } else {
                console.log('只有三页数据');
            }
        }
    }
    request.send()
}

getCSS.onclick = () => {
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            //下载完 但是不知道成功还是失败
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                console.log('失败');
            }
        }
    }

    request.send();
}
getJS.onclick = () => {
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            //下载完 但是不知道成功还是失败
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response;
                document.body.appendChild(script)
            } else {
                console.log('失败');
            }
        }
    }

    request.send();
}
getHTML.onclick = () => {
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            //下载完 但是不知道成功还是失败
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                console.log('失败');
            }
        }
    }
    request.send()
}
getXML.onclick = () => {
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            //下载完 但是不知道成功还是失败
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent.trim();
                console.log(text);
            } else {
                console.log('失败');
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    request.open("GET", '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const obj = JSON.parse(request.response)
                myname.textContent = obj.name
            } else {
                console.log('出错了');
            }
        }
    }
    request.send()
}
