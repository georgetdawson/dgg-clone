<?php
namespace Destiny;
use Destiny\Common\Utils\Tpl;
use Destiny\Common\Config;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?=Tpl::title($this->title)?>
    <?php include 'seg/meta.php' ?>
    <?=Tpl::manifestLink('web.css')?>
</head>
<body id="subscription-complete">
<div id="page-wrap">

    <?php include 'seg/nav.php' ?>

    <section class="container vertical-contain">
        <div style="flex: 1;">
            <h1 class="title">
                <span>Complete</span> <small>successful</small>
            </h1>

            <div class="content content-dark clearfix">

                <div class="ui-step-legend-wrap clearfix">
                    <div class="ui-step-legend clearfix">
                        <ul>
                            <li><a>Select a subscription</a></li>
                            <li><a>Confirmation</a></li>
                            <li><a>Pay subscription</a></li>
                            <li class="active"><a>Complete</a><i class="arrow"></i></li>
                        </ul>
                    </div>
                </div>

                <form action="/" method="GET">

                    <div class="ds-block">
                        <p>Your order was successful, The order reference is <span class="badge badge-default">#<?=$this->subscription['subscriptionId']?></span>
                            <br />Please email <a href="mailto:<?=Config::$a['support_email']?>"><?=Config::$a['support_email']?></a> for any queries or issues.<br /><br />
                            Thank you for your support!</p>
                    </div>

                    <div class="subscription-tier ds-block">
                        <div class="subscription" style="width: auto;">
                            <h3><?=$this->subscriptionType['tierLabel']?></h3>
                            <p><span class="sub-amount">$<?=$this->subscriptionType['amount']?></span> (<?=$this->subscriptionType['billingFrequency']?> <?=strtolower($this->subscriptionType['billingPeriod'])?>)</p>
                            <?php if($this->subscription['recurring'] == 1): ?>
                                <p>Subscription is automatically renewed</p>
                            <?php endif ?>
                            <?php if(!empty($this->giftee)): ?>
                                <p><i class="fas fa-gift"></i> You have gifted this to <span class="badge badge-danger"><?=Tpl::out($this->giftee['username'])?></span></p>
                            <?php endif ?>
                        </div>
                    </div>

                    <div class="form-actions">
                        <a href="/profile" class="btn btn-primary">Back to profile</a>
                    </div>

                </form>

            </div>
        </div>
    </section>
</div>

<?php include 'seg/foot.php' ?>
<?php include 'seg/tracker.php' ?>
<?=Tpl::manifestScript('runtime.js')?>
<?=Tpl::manifestScript('common.vendor.js')?>
<?=Tpl::manifestScript('web.js')?>

</body>
</html>