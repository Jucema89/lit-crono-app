import { css } from "lit";

export const cronoStyles = css`

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap");

.countdown__container {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.countdown__data {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  margin-bottom: 2rem;
}
.countdown__input {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 24px;
  padding-right: 20px;
  font-size: 1rem;
  line-height: 1;
  color: black;
  background-color: white;
  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.15);
  border: 1px black solid;
  border-radius: 10px;
  font-family: Poppins;
}
.countdown__button {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 24px;
  padding-right: 20px;
  font-size: 1rem;
  line-height: 1;
  color: #ffffff;
  background-color: purple;
  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 10px;
  font-family: Poppins;
  transition-property: color, background-color;
  transition-duration: 300ms;
}

.countdown__button:hover {
  background-color: #ffffff;
  color: #000000;
}
.countdown__item {
  display: flex;
  flex-direction: column;
  font-family: '', sans-serif;
}
.countdown__number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 14px 1px rgba(0, 0, 0, 0.16);
  font-size: 42px;
  font-family: 'Handjet', sans-serif;
  font-style: normal;
  font-variation-settings:
    "ELGR" 1,
    "ELSH" 2;
  color: #fff;
  background-color: black;
}
.countdown__info {
  font-size: 24px;
  color: #484848;
  text-align: center;
}
`

export const backgroundStyles = css`
  :host {
    main {
      height:100vh;
      width: 100vw;
      display: grid;
      grid-template-columns: repeat(3, 30%);
      align-content: stretch;
      justify-items: stretch;
      justify-content: space-evenly;
      align-items: start;
      background-color: hsla(253, 100%, 27%, 1);
      background-image: radial-gradient(circle at 48% 50%, hsla(273, 90%, 49%, 1) 9.45100111700773%, transparent 66.90222736333041%), radial-gradient(circle at 70% 72%, hsla(297, 70%, 44%, 1) 12.019916069930487%, transparent 48.99175767907703%), radial-gradient(circle at 90% 15%, hsla(207, 77%, 53%, 1) 18.05890413395853%, transparent 81%), radial-gradient(circle at 44% 53%, hsla(297, 98%, 33%, 1) 0%, transparent 55.377223394289686%), radial-gradient(circle at 84% 77%, hsla(243, 52%, 43%, 1) 20%, transparent 87%), radial-gradient(circle at 38% 55%, hsla(271, 99%, 53%, 1) 24.287087723027025%, transparent 56.37857556000195%);
      background-blend-mode: normal, normal, normal, normal, normal, normal;
    }
  }
`
export const buttonsGradiet = css`
  .buttons {
    text-align: center;
  }

.btn-hover {
    width: 70px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 70px;
    text-align:center;
    border: none;
    background-size: 300% 100%;

    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-large {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 40px;
    text-align:center;
    border: none;
    background-size: 300% 100%;

    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-large:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-large:focus {
    outline: none;
}


.btn-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:focus {
    outline: none;
}

.btn-hover.color {
    background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}

.btn-large.color {
    background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}
`
export const buttonAction =   css`
.ba-we-love-subscribers {
width: 290px;
height: 50px;
background-color: #fff;
border-radius: 15px;
box-shadow: 0px 12px 45px rgba(0, 0, 0, .15);
font-family: 'Roboto', sans-serif;
text-align: center;
margin: 0 0 10px 0;
overflow: hidden;
opacity: 0;
}
.ba-we-love-subscribers.open {
height: 270px;
opacity: 1;
}
.ba-we-love-subscribers.popup-ani {
-webkit-transition: all .8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
transition: all .8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.ba-we-love-subscribers h1 {
font-size: 20px;
color: #757575;
padding: 25px 0;
margin: 0;
font-weight:400;
font-family: 'Roboto', sans-serif;

}
.ba-we-love-subscribers .love {
    width: 20px;
    height: 20px;
    background-position: 35px 84px;
    display: inline-block;
    margin: 0 6px;
    background-size: 62px;
    }
    .ba-we-love-subscribers .ba-logo {
    width: 65px;
    height: 25px;
    background-position: 0px;
    margin: 0 auto;
    opacity: .5;
    cursor: pointer;
    }
    .ba-we-love-subscribers .ba-logo:hover {
    opacity: 1;
    }
    .logo-ani {
    transition: 0.5s linear;
    -webkit-transition: 0.5s linear;
    }
    .ba-we-love-subscribers input {
    font-size: 14px;
    padding: 12px 15px;
    border-radius: 15px;
    border: 0;
    outline: none;
    margin: 8px 0;
    width: 100%;
    box-sizing: border-box;
    line-height: normal;
    /*Bootstrap Overide*/
    font-family: sans-serif;
    /*Bootstrap Overide*/
    }
    .ba-we-love-subscribers form {
    padding: 5px 30px 0;
    margin-bottom: 15px;
    }
    .ba-we-love-subscribers input[name="name-crono"] {
    background-color: #eee;
    }
    .ba-we-love-subscribers input[name="time"] {
    background-color: #eee;
    }
    .ba-we-love-subscribers input[name="submit"] {
    background-color: #00aeef;
    cursor: pointer;
    color: #fff;
    }
    .ba-we-love-subscribers input[name="submit"]:hover {
    background-color: #26baf1;
    }
    .ba-we-love-subscribers .img {
    background-image: url("https://4.bp.blogspot.com/-1J75Et4_5vc/WAYhWRVuMiI/AAAAAAAAArE/gwa-mdtq0NIqOrlVvpLAqdPTV4VAahMsQCPcB/s1600/barrel-we-love-subscribers-img.png");
    }
    .ba-we-love-subscribers-fab {
      width: 65px;
      height: 65px;
      background-color: #000000;
      border-radius: 30px;
      float: right;
      box-shadow: 0px 12px 45px rgba(0, 0, 0, .3);
      z-index: 5;
      position: relative;
      cursor: pointer;
    }
    .ba-we-love-subscribers-fab .img-fab {
      height: 25px;
      width: 25px;
      color: white;
      fill: white;    
      margin: 15px auto;
    }

    .ba-we-love-subscribers-fab .wrap {
    transform: rotate(0deg);
    -webkit-transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
    transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
    }
    .ba-we-love-subscribers-fab .ani {
    transform: rotate(45deg);
    -webkit-transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
    transition: all .15s cubic-bezier(0.15, 0.87, 0.45, 1.23);
    }
    .ba-we-love-subscribers-fab .close {
    background-position: -2px 1px;
    transform: rotate(-45deg);
    float: none;
    /*Bootstrap Overide*/
    opacity: 1;
    /*Bootstrap Overide*/
    }
    .ba-we-love-subscribers-wrap {
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 1000;
    }
    .ba-settings {
    position: absolute;
    top: -25px;
    right: 0px;
    padding: 10px 20px;
    background-color: #555;
    border-radius: 5px;
    color: #fff;
    }
`;