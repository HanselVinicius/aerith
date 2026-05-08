export enum AuthProvider {
  LOCAL = 'LOCAL',
  GOOGLE = 'GOOGLE',
}

export class User {
  private readonly id: string;

  private name: string;

  private email: string;

  private emailVerified: boolean;

  private avatarUrl: string | null;

  private authProviderId: string;

  private authProvider: AuthProvider;

  private passwordHash: string | null;

  private active: boolean;

  private createdAt: Date;

  private updatedAt: Date;

  private constructor(
    id: string,
    name: string,
    email: string,
    emailVerified: boolean,
    avatarUrl: string | null,
    authProvider: AuthProvider,
    authProviderId: string,
    passwordHash: string | null,
    active: boolean,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email.toLowerCase();
    this.emailVerified = emailVerified;
    this.avatarUrl = avatarUrl;
    this.authProvider = authProvider;
    this.authProviderId = authProviderId;
    this.passwordHash = passwordHash;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static createOAuthUser(
    id: string,
    name: string,
    email: string,
    provider: AuthProvider,
    providerId: string,
    avatarUrl: string | null,
  ): User {
    return new User(
      id,
      name,
      email,
      true,
      avatarUrl,
      provider,
      providerId,
      null,
      true,
      new Date(),
      new Date(),
    );
  }

  public static createLocalUser(
    id: string,
    name: string,
    email: string,
    passwordHash: string,
  ): User {
    return new User(
      id,
      name,
      email,
      false,
      null,
      AuthProvider.LOCAL,
      email,
      passwordHash,
      true,
      new Date(),
      new Date(),
    );
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public isEmailVerified() {
    return this.emailVerified;
  }

  public getAvatarUrl() {
    return this.avatarUrl;
  }

  public getAuthProvider() {
    return this.authProvider;
  }

  public getAuthProviderId() {
    return this.authProviderId;
  }

  public getPasswordHash() {
    return this.passwordHash;
  }

  public isActive() {
    return this.active;
  }

  public getCreatedAt() {
    return this.createdAt;
  }

  public getUpdatedAt() {
    return this.updatedAt;
  }

  public deactivate() {
    this.active = false;
    this.touch();
  }

  public activate() {
    this.active = true;
    this.touch();
  }

  public verifyEmail() {
    this.emailVerified = true;
    this.touch();
  }

  public updateName(name: string) {
    this.name = name;
    this.touch();
  }

  public updateAvatar(avatarUrl: string | null) {
    this.avatarUrl = avatarUrl;
    this.touch();
  }

  private touch() {
    this.updatedAt = new Date();
  }
}