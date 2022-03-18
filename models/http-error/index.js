class HttpError extends Error {
  constructor(message, code, data = {}) {
    super(message);
    this.code = code;
    this.data = data;
  }
}

class BadRequestError extends HttpError {
  constructor(message = 'Bad request', data = {}) {
    super(message, 400, data);
  }
}

class NotFoundError extends HttpError {
  constructor(message = 'Not found', data = {}) {
    super(message, 404, data);
  }
}

class InternalError extends HttpError {
  constructor(message = 'Internal server error', data = {}) {
    super(message, 500, data);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message = 'Unauthorized', data = {}) {
    super(message, 401, data);
  }
}

module.exports = {
  HttpError,
  BadRequestError,
  NotFoundError,
  InternalError,
  UnauthorizedError,
};
