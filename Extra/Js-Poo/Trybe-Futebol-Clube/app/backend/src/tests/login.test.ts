import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/user';
import { oneUser as userMock } from './mock/models/users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a página Login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(Users, 'findOne').resolves({
      ...userMock.findOne
    } as Users);
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  });

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  //   (Example.findOne as sinon.SinonStub).restore();
  // })
  });
// it('...', async () => {
//   chaiHttpResponse = await chai
//      .request(app)
//      ...

//   expect(...)

  it('Se o login foi feito com sucesso deverá retornar um objeto', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: "sarahb@admin.com",
        password: "confidencial",
      });
      
    expect(chaiHttpResponse).to.be.an('object');
  });
});
