var stepdown = () => {
	//var counter = 12
	setTimeout( () => {
		console.log("10..")
			setTimeout( () => {
				console.log("9..")
				setTimeout( () =>{
					console.log("8..")
					setTimeout( () => {
						console.log("7..")
						//console.log(--counter);
						setTimeout( () => {
							console.log("6..")
							setTimeout( () => {
								console.log("5..")
								setTimeout( () => {
									console.log("4..")
									setTimeout( () => {
										console.log("3..")
										setTimeout( () => {
											console.log("2..")
											setTimeout( () => {
												console.log("1..")
												setTimeout( () => {
													console.log("Good Morning")
												},2000)
											},2000)
										},2000)
									},2000)
								},2000)
							},2000)
						},2000)
					},2000)
				},2000)
			},2000)
		},2000)
}

stepdown();
console.log("callback hell")