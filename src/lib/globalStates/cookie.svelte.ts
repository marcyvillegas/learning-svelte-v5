class CookieState {
	cookieCount = $state(0);

	eatCookie() {
		this.cookieCount += 1;
	}

	addCookie() {
		this.cookieCount += 1;
	}

	removeCookie() {
		this.cookieCount = 0;
	}
}

export const cookieState = new CookieState();
