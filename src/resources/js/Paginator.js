export default class Paginator {
    constructor(response, url = null) {
      this.response = response;
      this.url = new URL(url || window.location.href)
    }
    items () {
      return this.response.results;
    }
    hasMore () {
      return this.response.offset + this.response.limit < this.response.total
    }
    nextPageUrl() {
      this.url.searchParams.set('offset', this.hasMore() ? this.response.offset + this.response.limit : this.response.offset);
      this.url.searchParams.set('limit', this.response.limit);
      return this.url.toString();
    }
    prevPageUrl() {
      this.url.searchParams.set('offset', Math.max(0, this.response.offset - this.response.limit));
      this.url.searchParams.set('limit', this.response.limit);
      return this.url.toString();
    }
  }
