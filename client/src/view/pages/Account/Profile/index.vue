<template>
  <div class="acount-profile">
    <div class="profile-info">
      <h1 class="profile-title">Thông tin cá nhân</h1>
      <div class="info-user">
        <div class="box-text">
          <span class="label"> Họ và tên: </span>
          <div class="user-name">Trần Văn Dinh</div>
        </div>
        <div class="box-text">
          <span class="label"> Email </span>
          <div class="user-email">Dinhtranuty@gmail.com</div>
        </div>
      </div>
    </div>
    <div class="profile-address">
      <h1 class="profile-title">Thông tin giao hàng</h1>
      <div class="list-address">
        <div class="address-item">
          <h4 class="heading">Mặc định</h4>
          <div class="address-info">
            <div class="phone-number">0369999999</div>
            <div class="address">
              Xóm 4, Xã Giao Long - huyện Giao Thủy - tỉnh Nam Định
            </div>
          </div>
        </div>
        <div class="address-item">
          <h4 class="heading"></h4>
          <div class="address-info">
            <div class="phone-number">0889997773</div>
            <div class="address">123 Nguyen Trai, Thanh Xuan , Tp. Ha Noi</div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-secure">
      <h1 class="profile-title">Đổi mật khẩu</h1>
      <form class="form">
        <input type="text" placeholder="Nhập mật khẩu hiện tại" />
        <input type="text" placeholder="Nhập mật khẩu mới" />
        <input type="text" placeholder="Xác nhận mật khẩu" />
        <input type="submit" value="Đổi mật khẩu" />
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.acount-profile {
  display: flex;
  flex-direction: column;
  gap: 42px;
  .profile-title {
    font-size: 15px;
    font-weight: 500;
    line-height: 120%;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .info-user {
      display: flex;
      gap: 8px;
      font-weight: 400;
      .box-text {
        color: $gray;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background-color: $bg-light-gray;
        padding: 10px;
        flex: 1;
        border-radius: 8px;
        .label {
          color: $black;
          font-weight: 500;
          font-size: 12px;
        }
      }
    }
  }
  .profile-address {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .list-address {
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-weight: 400;
      .address-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        background-color: $bg-light-gray;

        &:first-child {
          background-color: rgba(250, 77, 8, 0.07);
        }
        .heading {
          font-size: 12px;
          color: $orange;
        }
        .address-info {
          color: $gray;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
    }
  }
  .profile-secure {
    display: flex;
    flex-direction: column;
    gap: 16px;
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
      input[type="text"] {
        background-color: $bg-light-gray;
        padding: 15px 10px;
        border-radius: 0;
        flex: 1;
        width: 100%;
        &:focus {
          outline: unset;
          border-bottom: 1px solid $azure;
        }
      }
      input[type="submit"] {
        background-color: $azure;
        color: $white;
        padding: 12px 8px;
        border-radius: 0;
        width: auto;
        border-radius: 8px;
        flex: 0;
        align-self: flex-end;
      }
    }
  }
  .test {
    display: block;
  }

  .test > div {
    background: red;
    margin-bottom: 10px;
    width: auto;
  }
}
</style>