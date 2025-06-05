export abstract class HttpException extends Error {
  abstract statusCode: number
  constructor(message: string) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class InternalServerErrorException extends HttpException {
  statusCode = 500
  constructor(message = 'Internal server error') {
    super(message)
  }
}

export class BadRequestException extends HttpException {
  statusCode = 400
  constructor(message = 'Bad request') {
    super(message)
  }
}

export class UnauthorizedException extends HttpException {
  statusCode = 401
  constructor(message = 'Unauthorized') {
    super(message)
  }
}

export class ForbiddenException extends HttpException {
  statusCode = 403
  constructor(message = 'Forbidden') {
    super(message)
  }
}

export class NotFoundException extends HttpException {
  statusCode = 404
  constructor(message = 'Not found') {
    super(message)
  }
}

export class ConflictException extends HttpException {
  statusCode = 409
  constructor(message = 'Conflict') {
    super(message)
  }
}

export class UnprocessableEntityException extends HttpException {
  statusCode = 422
  constructor(message = 'Unprocessable entity') {
    super(message)
  }
}
