<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("./templates/head_blog.php"); ?>
</head>

<body>

    <!--***************************************  -->
    <!--              NAVBAR                     -->
    <!-- *************************************** -->
    <?php include("./templates/nav.php"); ?>


    <div style="margin-top:10rem;"></div>


    <div class="container" style="padding:0;">
        <section class="text-center">
            <h1 class="mb-3">Latest posts </h1>

            <div class="row">

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card cardPackage text-center">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img class="card-img-top" src="/assets/img/blogs/theBloomingFriendship/1.jpeg" class=" img-fluid" />
                        </div>
                        <div class="card-body">
                            <h1>The Blooming Friendship</h1>
                            <a href="/pages/blogs/bloomingFriendship.php" class="btn btn-primary">Read</a>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card cardPackage text-center">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img class="card-img-top" src="/assets/img/blogs/5ThingsILearnt/1.jpeg" class=" img-fluid" />
                        </div>
                        <div class="card-body">
                            <h1>5 Things I learnt From My 1st Styled Shoot</h1>
                            <a href="/pages/blogs/5thingsILearnt.php" class="btn btn-primary">Read</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 ">
                    <div class="card cardPackage text-center">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img class="card-img-top" src="/assets/img/blogs/LiteraTeaParty/1.jpeg" class="img-fluid" />
                        </div>
                        <div class="card-body">
                            <h1>Litera-Tea Party!</h1>
                            <a href="/pages/blogs/literaTeaParty.php" class="btn btn-primary">Read</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <br>
    <!--*********************************************************************-->
    <!--                             Pagination                              -->
    <!--*********************************************************************-->
    <!--
    <nav class="my-5">
        <ul class="pagination pagination-circle justify-content-center">
            <li class="page-item">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
    -->


    <!--*********************************************************************-->
    <!--                             FOOTER                                  -->
    <!--*********************************************************************-->
    <?php include("./templates/footer.php"); ?>

    <script src="/assets/js/wow.js"></script>
</body>

</html>