import { Controller, Get } from '@decorators/express';

@Controller('/')
class Greet {
  constructor() {
    this.greet = 'Greetings';
  }

  @Get('/greet')
  sendMessage(req, res) {
    return res.send(this.greet);
  }
}

export default Greet;
