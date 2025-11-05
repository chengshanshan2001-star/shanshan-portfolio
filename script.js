<script>
  // 获取页面上所有 audio 标签
  const audios = document.querySelectorAll('audio');

  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audios.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause(); // 暂停其他音频
        }
      });
    });
  });
</script>
