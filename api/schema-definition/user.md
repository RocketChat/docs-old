# User

The **IUser** interface represents the **User** object stored in the collection `users`

```typescript
interface IUser {
	_id: string;
	createdAt: Date;
	roles: string[];
	type: string;
	active: boolean;
	username?: string;
	name?: string;
	services?: IUserServices;
	emails?: IUserEmail[];
	status?: string;
	statusConnection?: string;
	lastLogin?: Date;
	avatarOrigin?: string;
	utcOffset?: number;
	language?: string;
	statusDefault?: string;
	oauth?: {
		authorizedClients: string[];
	};
	_updatedAt?: Date;
	statusLivechat?: string;
	e2e?: {
		private_key: string;
		public_key: string;
	};
	requirePasswordChange?: boolean;
	customFields?: {
		[key: string]: any;
	};
	settings?: IUserSettings;
}
```

The following sub-interfaces are used by the **IUser** interface

```typescript
interface ILoginToken {
	hashedToken: string;
	twoFactorAuthorizedUntil?: Date;
	twoFactorAuthorizedHash?: string;
}

interface IMeteorLoginToken extends ILoginToken {
	when: Date;
}

interface IPersonalAccessToken extends ILoginToken {
	type: 'personalAccessToken';
	createdAt: Date;
	lastTokenPart: string;
	name?: string;
	bypassTwoFactor?: boolean;
}

interface IUserEmailVerificationToken {
	token: string;
	address: string;
	when: Date;
}

interface IUserEmailCode {
	code: string;
	expire: Date;
}

type LoginToken = ILoginToken & IPersonalAccessToken;

interface IUserServices {
	password?: {
		bcrypt: string;
	};
	email?: {
		verificationTokens?: IUserEmailVerificationToken[];
	};
	resume?: {
		loginTokens?: LoginToken[];
	};
	google?: any;
	facebook?: any;
	github?: any;
	totp?: {
		enabled: boolean;
		hashedBackup: string[];
		secret: string;
	};
	email2fa?: {
		enabled: boolean;
		changedAt: Date;
	};
	emailCode: IUserEmailCode[];
}

interface IUserEmail {
	address: string;
	verified: boolean;
}

interface IUserSettings {
	profile: any;
	preferences: {
		[key: string]: any;
	};
}
```

