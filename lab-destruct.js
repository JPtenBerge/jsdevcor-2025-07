const course = {
	title: 'ES2015 and 2016',
	description: 'New features of ES2015 and 2016',
	editions: [
		{
			trainer: 'Matt Smith',
			dates: {
				start: '01/01/2016',
				end : '05/01/2016'
			},
			location: {
				address1: 'One Way Street',
				city : 'New York'
			}
		},
		{
			dates: {
				start: '03/05/2016',
				end: '08/05/2016'
			},
			location: {
				address1: 'Two Blocks Road',
				address2: '1234 AB',
				city: 'Las Vegas'
			}
		},
		{
			trainer: 'John Doe',
			dates: {
				start: '10/10/2016',
				end : '15/10/2016'
			},
			location: {
				address1: 'One Way Street',
				city : 'New York'
			}
		},
	]
};

let {title, editions: [ { trainer}  ]} = course;
