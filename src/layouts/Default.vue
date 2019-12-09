<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav>
        <g-link class="nav-link" to="/projects">
          Projects
        </g-link>
        <g-link class="nav-link" to="/talks">
          Talks
        </g-link>
        <g-link class="nav-link" to="/interviews">
          Interviews
        </g-link>
        <a
          class="nav-link"
          href="https://github.com/sarahdayan/"
          rel="noopener"
          target="_blank"
          >GitHub</a
        >
        <a
          class="nav-link"
          href="https://twitter.com/frontstuff_io"
          rel="noopener"
          target="_blank"
          >Twitter</a
        >
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 40px auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.nav-link {
  margin-left: 20px;
}
</style>
