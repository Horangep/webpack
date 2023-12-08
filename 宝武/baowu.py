import requests
import execjs
def get_js(data):
    with open('01.js', mode='r', encoding='utf-8') as f:
    # with open('baowu-webpack.js', mode='r', encoding='utf-8') as f:
    # with open('baowu-crypto.js', mode='r', encoding='utf-8') as f:
        js_code = f.read()
    compile_result = execjs.compile(js_code)
    result = compile_result.call('get_h',data)
    # print(result)

    return result
def init_session():

    session = requests.session()
    session.headers ={
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    # Already added when you pass json=
    # 'Content-Type': 'application/json',
    'Origin': 'https://www.baowuresources.com',
    'Referer': 'https://www.baowuresources.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
    'sec-ch-ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',

}
    # print(session.headers)
    return session
session = init_session()
def get_res(result,data):
    headers = {
        'x-user': result['x-user'],
        'x-nonce': result['x-nonce'],
        'x-date': str(result['x-date']),
        'Content-Md5': result['Content-Md5'],
        'x-signature': result['x-signature'],
    }
    session.headers.update(headers)
    print(session.headers)
    params = {
        'domainId': '3',
    }

    # json_data = {
    #     'pageNo': 0,
    #     'pageSize': 12,
    #     'condition': {
    #         'nodeId': 126,
    #     },
    # }
    url = 'http://cmsauth.baowugroup.com/v1/web/api/content/list?domainId=3'
    response =session.post(url, headers=headers, data=data)
    print(response.text)
def main():
    data = '{"pageNo": 0,"pageSize": 12, "condition": {"nodeId": 126}}'
    result = get_js(data)
    get_res(result,data)
    # print(result)
if __name__ == '__main__':
    main()
