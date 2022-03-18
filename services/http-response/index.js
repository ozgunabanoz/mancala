const { InternalError } = require('../../models');

// Service for constructing http responses
class HttpResponse {
  // take response message, status and data
  constructor(message, status, data) {
    this.message = message;
    this.status = status;
    this.data = data;
  }

  // take the response element of the express app
  send(res) {
    const { message, status, data } = this;
    const responseData = { message, status, data };

    return res.status(status).send(responseData);
  }
}

// for success responses
class SuccessResponse extends HttpResponse {
  constructor(message = 'Success', data = {}) {
    super(message, 200, data);
  }
}

// for error responses
class ErrorResponse extends HttpResponse {
  constructor(error = new InternalError()) {
    const { message, code, data } = error;

    super(message, code, data);
  }
}

module.exports = { SuccessResponse, ErrorResponse };
