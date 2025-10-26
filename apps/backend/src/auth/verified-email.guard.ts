import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';

@Injectable()
export class VerifiedEmailGuard extends JwtAuthGuard {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // First check JWT auth
    const isAuth = await super.canActivate(context);
    
    if (!isAuth) {
      return false;
    }

    // Then check email verification
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user.isEmailVerified) {
      throw new ForbiddenException('Please verify your email address before placing orders');
    }

    return true;
  }
}

