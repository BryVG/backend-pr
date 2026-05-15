import request from 'supertest'

import {
  Test,
  TestingModule
} from '@nestjs/testing'

import {
  INestApplication
} from '@nestjs/common'

import { AppModule }
from './../src/app.module'

describe('Buyers (e2e)', () => {

  let app: INestApplication

  beforeEach(async () => {

    const moduleFixture:
    TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile()

    app =
      moduleFixture.createNestApplication()

    await app.init()
  })

  it('/buyers (GET)', () => {

    return request(app.getHttpServer())
      .get('/buyers')
      .expect(200)
  })
})