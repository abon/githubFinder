class Github {
  constructor() {
    this.client_id = "e30b8392b11d31042366";
    this.client_secret = "4415cc2bdce5b1940d4653f16825431d3e451ae7";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
