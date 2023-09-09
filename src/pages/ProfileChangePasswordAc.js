import React, { useCallback, useState } from "react";
import styles from "./ProfileChangePasswordAc.module.css";

const ProfileChangePasswordDe = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onButtonContainerClick = useCallback(async () => {
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New passwords do not match.");
      return;
    }
    try {
      const response = await fetch("/change-password-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // Password changed successfully
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setErrorMessage("");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Password change failed:", error);
      // Handle network or other errors
      setErrorMessage("An error occurred while changing the password.");
    }
  }, [oldPassword, newPassword, confirmNewPassword]);

  return (
    <div className={styles.profileChangePasswordAc}>
      <div className={styles.menu}>
        <div className={styles.menuMini}>
          <div className={styles.frameParent}>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/uangledoubleright.svg"
              />
            </div>
            <div className={styles.iconButtonParent}>
              <div className={styles.iconButton}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uhomealt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ulistul.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usuitcase.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/ufilemedicalalt.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/usitemap.svg"
                />
              </div>
              <div className={styles.iconButton1}>
                <img
                  className={styles.uhomeAltIcon}
                  alt=""
                  src="/uusersalt.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.uangleDoubleRightWrapper}>
            <img
              className={styles.uangleDoubleRightIcon}
              alt=""
              src="/usetting.svg"
            />
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            <div className={styles.qunLTiKhonParent}>
              <div className={styles.qunLTi}>Quản lý tài khoản</div>
              <div className={styles.mennuParent}>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucreatedashboard.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Thông tin cá nhân</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/unotifiacation.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý thông báo</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ucommentdots.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Trò chuyện</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu3} onClick={onMennuContainer3Click}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ulock.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đổi mật khẩu</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright1.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ueditalt2.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Quản lý chữ ký</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ufileblank.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Tài liệu của tôi</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
                <div className={styles.mennu}>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/usignoutalt.svg"
                  />
                  <div className={styles.hmNayWrapper}>
                    <div className={styles.hmNay}>Đăng xuất</div>
                  </div>
                  <img
                    className={styles.uangleRightIcon}
                    alt=""
                    src="/uangleright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.coverParent}>
        <div className={styles.cover}>
          <img
            className={styles.unsplashhorhcnqsxnqIcon}
            alt=""
            src="/unsplashhorhcnqsxnq@2x.png"
          />
          <div className={styles.notificationWrapper}>
            <div className={styles.notification}>
              <img
                className={styles.ucreateDashboardIcon}
                alt=""
                src="/ucamerachange.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.unsplashpuhxosappfaWrapper}>
                <img
                  className={styles.unsplashpuhxosappfaIcon}
                  alt=""
                  src="/unsplashpuhxosappfa@2x.png"
                />
              </div>
              <div className={styles.ucameraWrapper}>
                <img className={styles.ucameraIcon} alt="" src="/ucamera.svg" />
              </div>
            </div>
            <div className={styles.nguynHongNamParent}>
              <div className={styles.nguynHongNam}>Nguyễn Hoàng Nam</div>
              <div className={styles.nhnVinIt}>Nhân viên IT</div>
            </div>
          </div>
        </div>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.flow1Parent}>
              <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
              <div className={styles.avt}>
                <div className={styles.userpic} />
                <div className={styles.state} />
                <div className={styles.label}>KA</div>
              </div>
              <div className={styles.overviewParent}>
                <div className={styles.qunLTi}>My Profile</div>
                <div className={styles.employees}>Employees</div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.memberParent}>
                <div className={styles.member}>
                  <div className={styles.avt1}>
                    <div className={styles.userpic1} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>KA</div>
                  </div>
                  <div className={styles.avt2}>
                    <div className={styles.userpic2} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>NH</div>
                  </div>
                  <div className={styles.avt3}>
                    <div className={styles.userpic3} />
                    <div className={styles.state1} />
                    <div className={styles.label1}>HN</div>
                  </div>
                  <div className={styles.avt4}>
                    <img
                      className={styles.ovalCopy3}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.wrapper}>
                      <div className={styles.div}>+3</div>
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.usearchParent}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/usearch.svg"
                    />
                    <div className={styles.search}>Search</div>
                  </div>
                  <img
                    className={styles.uangleDownIcon}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.uplusWrapper}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/uplus.svg"
                />
              </div>
              <div className={styles.memberParent}>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/ucommentdots1.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.component2}>
                  <div className={styles.ucommentDotsWrapper}>
                    <img
                      className={styles.ucreateDashboardIcon}
                      alt=""
                      src="/unotifiacation1.svg"
                    />
                  </div>
                  <div className={styles.component2Child} />
                </div>
                <div className={styles.unsplashfgUd73uZmWrapper}>
                  <img
                    className={styles.unsplashfgUd73uZmIcon}
                    alt=""
                    src="/unsplashfg-ud73u-zm@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.ulockParent}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/ulock1.svg"
                />
                <div className={styles.iMtKhu}>Đổi mật khẩu</div>
              </div>
              <div className={styles.button} onClick={onButtonContainerClick}>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <div className={styles.text}>Lưu</div>
              </div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.inputParent}>
            <div className={styles.input1}>
            <label htmlFor="oldPassword" className={styles.label4}>
                <span>*</span>
                <span className={styles.mtKhuC}> Mật khẩu cũ</span>
              </label>
              <div className={styles.input2}>
                <img
                  className={styles.outlineSearch}
                  alt=""
                  src="/oval-copy-3.svg"
                />
                <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Nhập mật khẩu cũ"
                 />
                 <div className={styles.search}>
                 {oldPassword.replace(/./g, '*')}
                 </div>
                <img
                  className={styles.ucreateDashboardIcon}
                  alt=""
                  src="/ueye.svg"
                />
                <img
                  className={styles.outlineClose}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.input3}>
                <div className={styles.label4}>
                  <span>*</span>
                  <span className={styles.mtKhuC}> Mật khẩu mới</span>
                </div>
                <div className={styles.input2}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                   <input
                   type="password"
                   id="newPassword"
                   value={newPassword}
                   onChange={(e) => setNewPassword(e.target.value)}
                   placeholder="Nhập mật khẩu mới"
                    />
                   <div className={styles.search}>
                    {newPassword.replace(/./g, '*')}
                   </div>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ueyeslash.svg"
                  />
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.input5}>
              <label htmlFor="confirmNewPassword" className={styles.label4}>
                  <span>*</span>
                  <span className={styles.mtKhuC}> Nhập lại mật khẩu mới</span>
                </label>
                <div className={styles.input2}>
                  <img
                    className={styles.outlineSearch}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                   <div className={styles.search}>
                    {confirmNewPassword.replace(/./g, '*')}
                   </div>
                  <img
                    className={styles.ucreateDashboardIcon}
                    alt=""
                    src="/ueye1.svg"
                  />
                  <img
                    className={styles.outlineClose}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.text}>Đổi mật khẩu</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileChangePasswordDe;
