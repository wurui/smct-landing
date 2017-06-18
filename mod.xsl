<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.smct-landing">
        <xsl:param name="actionShopcart">http://www./smct/submitbuild</xsl:param>
        <xsl:param name="actionWorks">/smct/submitbuild</xsl:param>
        <!-- className 'J_OXMod' required  -->
        <!---
        主要是搞点酷炫效果来吸引用户
        -->
        <div class="J_OXMod oxmod-smct-landing" ox-mod="smct-landing">
            <div class="fullscreen J_coolthings fadein">
                <div class="background">

                </div>
                <div class="playground">
                    <div class="logos-bg"></div>
                    <div class="J_logo logos"></div>
                    <h3 class="goldtitle">请选择你的车标</h3>
                    <div class="bottom">
                        <button class="J_reset" data-role="prev" disabled="disabled"></button>
                        换一批
                        <button class="J_reset" data-role="next"></button>
                        <br/><br/>
                        <label>
                            上传图标
                            <input type="file" class="J_uploadfile" style="display:none;"/>
                        </label>

                    </div>
                </div>

                <div class="J_loading progressbar">
                    <div class="rpm">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <div class="pointer J_pointer"></div>
                    </div>
                    <br/><br/>
                    <span class="J_Timer timer">Go!</span>
                    <br/><br/>
                    <p class="J_Result hongbao"></p>
                </div>
            </div>
            <div class="J_topmask topmask">

            </div>

            <div class="editor J_editor">
                <h3 class="title">车贴定制</h3>
                <div class="preview bgcolor-1">
                    <div class="card-header">
                        <input type="text" value="扫码移车" class="J_text1 maintext" maxLength="6"/>
                    </div>
                    <div class="card-body tpl tpl-1">
                        <div class="central J_central"></div>
                        <img src="http://i.oxm1.cc/uploads/git/wurui/img/2ahkwkkveTj1rgh0ueRlcquA5vz-1000.png"
                             class="qrcode" width="120"/>
                    </div>
                    <div class="card-footer">
                        <input type="text" class="subtext J_text2" value="www.shaomachetie.com" maxLength="25"/>
                        <!--
                        <span class="J_text2">

                        </span>-->
                    </div>
                </div>

                <div class="buttons">
                    <form method="post" action="{$actionShopcart}">
                        <button type="submit" class="bt-main">我很满意,提交!</button>
<!--
                        <button type="submit" onclick="this.form.action='{$actionWorks}'" class="bt-second">保存至我的车贴</button>
                        -->
                    </form>
                </div>
                <p>实物尺寸 72mm &#215; 72mm</p>
                <br/><br/>

            </div>



        </div>

    </xsl:template>
</xsl:stylesheet>
