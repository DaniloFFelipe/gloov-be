import type { PrismaClient, Session, User } from '@gloov/db'

import { UnauthorizedException } from '../../../errors/http-exceptions.ts'

export type SessionPayload = { user: User; session: Session }
export interface SessionService {
  createSession(userId: string): Promise<string>
  getSession(sessionId: string): Promise<SessionPayload>
}

export class SessionServiceImpl implements SessionService {
  constructor(private readonly prisma: PrismaClient) {}

  async createSession(userId: string): Promise<string> {
    await this.prisma.session.deleteMany({
      where: { userId },
    })
    const session = await this.prisma.session.create({
      data: { userId: userId },
    })
    return session.id
  }

  async getSession(
    sessionId: string
  ): Promise<{ user: User; session: Session }> {
    const session = await this.prisma.session.findUnique({
      where: { id: sessionId },
      include: { user: true },
    })

    if (!session) {
      throw new UnauthorizedException('Session not found')
    }

    return { user: session.user, session }
  }
}
