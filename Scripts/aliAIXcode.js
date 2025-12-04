let body = $request.body || "";

if ($request.url.includes("dashscope.aliyuncs.com/compatible-mode")) {
	let jsonBody = body ? JSON.parse(body) : {};
	jsonBody.tools = null;
	body = JSON.stringify(jsonBody);
	console.log("修改后 Body:", body);
} else {
	console.log("非 POST 请求或 URL 不匹配");
}

$done({ body });