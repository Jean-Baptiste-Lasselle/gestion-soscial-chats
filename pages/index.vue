<template>
  <section class="container">
    <div>
      <h1 class="site-hero">
        <span
          class="site-avatar"
          style="background-image: url(https://github.com/egoist.png)">
        </span>
        <span class="site-title">EGOIST CHAT</span>
      </h1>
      <div class="site-desc">This is the chat community of <a href="https://github.com/egoist">my open-source projects</a>, you can join us here:</div>
      <a href="https://discord.gg/KFrDE8Z" class="button">
        <discord-icon></discord-icon>
      </a>
    <div class="footer">
      <a href="https://twitter.com/_egoistlily" class="twitter-link">
        <twitter-icon class="twitter-icon"></twitter-icon>
        follow me on twitter
      </a>
    </div>
    </div>
  </section>
</template>

<script>
import { TwitterIcon } from 'vue-feather-icons'
import DiscordIcon from '../components/DiscordIcon'

export default {
  components: {
    DiscordIcon,
    TwitterIcon
  }
}
</script>

<style>
a {
  color: #333;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f6fffe;
  padding: .2rem 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  border: 1px solid #7289DA;
  border-radius: 3px;
  transition: transform .25s ease-out;
  transform: scale(1);
  backface-visibility: hidden;
}

.button:hover {
  transform: scale(1.05);
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.site-hero {
  font-size: 3rem;
  margin-top: 30px;
  position: relative;
}

.site-title {
  border-top: 3px solid;
  padding-top: 10px;
}

.site-desc {
  font-size: 1.25rem;
  margin: 20px 0;
}

.site-avatar {
  height: 60px;
  width: 60px;
  border-radius: 3px;
  display: inline-flex;
  position: absolute;
  background-size: cover;
  left: -80px;
  top: 0;
  border: 2px solid white;
}

.footer {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(162, 192, 210, 0.45);
}

.discord-icon {
  height: 40px;
}

.discord-icon path {
  fill: #7289DA;
}

.twitter-link {
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
}

.twitter-icon {
  height: 20px;
  margin-right: 5px;
  fill: #1da1f2;
}
</style>
