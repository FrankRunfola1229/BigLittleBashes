<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Big Little Bashes</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<link rel="stylesheet" href="/assets/css/styles.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/8a8132f90c.js" crossorigin="anonymous"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M79QRHHFM1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-M79QRHHFM1');
</script>

<!--DEMO PAGE ONLY, NO BUILDS. Must fake out module.exports support, define a global `module` so sourc can use it-->
<script>
    window.module = {};
</script>

<script src="/assets/js/confettiCannonCoreCode.js"></script>

<!--define the `module.exports` as the `confetti` global, the way that the cdn distributed file would-->
<script>
    window.confetti = module.exports;
</script>