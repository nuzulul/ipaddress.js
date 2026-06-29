const getIpAddress = ()=> new Promise((resolve,reject)=>{
	
	setTimeout(()=>{
		reject(`Timeout`);
	},5000)
	
	const iceServers = [
		{
			urls: 'stun:stun.l.google.com:19302'
		}
	];	
	
	const pc = new RTCPeerConnection({
		iceServers
	});

	pc.onicecandidate = (e) => {
		if (!e.candidate) return;
		if(e.candidate.type == "srflx"){
			const address = e.candidate.address;
			resolve(address);
		}
	};

	pc.onicecandidateerror = (e) => {
		console.debug(e);
	};

	pc.createDataChannel('ipaddress');
	
	pc.createOffer().then(offer => pc.setLocalDescription(offer));	
	
})

export default getIpAddress;

export { getIpAddress };
