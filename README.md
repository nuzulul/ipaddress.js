# ipaddress.js

Get user public IP address, no server required.

[>DEMO<](https://nuzulul.github.io/ipaddress.js/demo.html)

## Benefit

* ✅ Small
* ✅ 0 dependencies
* ✅ Serverless
* ✅ Simple API
* ✅ ESM support

## Install

```
npm install ipaddress.js
```
CDN

* [https://cdn.jsdelivr.net/npm/ipaddress.js/+esm](https://cdn.jsdelivr.net/npm/ipaddress.js/+esm)
* [https://unpkg.com/ipaddress.js](https://unpkg.com/ipaddress.js)
* [https://esm.sh/ipaddress.js](https://esm.sh/ipaddress.js)

```
<script type="importmap">
{
	"imports": {
		"ipaddress.js" : "https://esm.sh/ipaddress.js"
	}
}
</script>
```

## Usage

```
import { getIpAddress } from 'ipaddress.js';

try {
	const ipaddress = await getIpAddress();
	console.log(ipaddress);
} catch (error) {
	console.log(error);
}
```

### API

`getIpAddress()` - promise to get your public api address.

## License

* [MIT](hhttps://github.com/nuzulul/ipaddress.js/blob/main/LICENSE) (2026) [Nuzulul Zulkarnain](https://github.com/nuzulul)