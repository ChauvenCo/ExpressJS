const supertest = require('supertest');
const app = require('./index');

describe('test the wrong route', () => {
	test('it should response 404', (done) => {
		supertest(app)
		.get('/')
		.then((response) => {
			expect(response.statusCode).toBe(404);
			done();
		})
	});
	
	test('it should get friends', async () => {
		const result = await supertest(app).get('/api/friends').expect(200);
	});
	
	test('it should delete friends', async () => {
		const result = await supertest(app).get('/api/friends').expect(200);
		expect(result.body.friends.length).toBe(3);
		await supertest(app).delete('/api/friend?name=Bajeux').expect(200);
		const result2 = await supertest(app).get('/api/friends').expect(200);
		expect(result2.body.friends.length).toBe(result.body.friends.length - 1);
		
		/*supertest(app)
		.delete('/api/friend')
		.then((response) => {
			expect(response.statusCode).toBe(3);
		});*/
	});
});