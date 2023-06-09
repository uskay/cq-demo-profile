export class MyProfile extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${this.getStyle()}</style>${this.getHTML()}`;
  }
  getStyle() {
    return /* css */`
    :host {
      display: block;
    }
    .container {
      --tw-like-bg-color: #bbdfef;
      --fb-like-bg-color: #4e78f4;
      --gh-like-bg-color: black;
      --profile-pic-large-w: 200px;
      --profile-pic-mid-w: 150px;
      --profile-pic-small-w: 100px;
      --profile-pic-tiny-w: 30px;
      --dark-bg-color: #333333;
      --dark-font-color: #e2e2e2;
      --dark-link-color: #bbdfef;
      --light-bg-color: #fafafa;
      --light-font-color: #161616;
      --light-link-color: #0046ff;
      --material-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      container-type: inline-size;
      @container style(--theme: dark) {
        .my-profile {
          background-color: var(--dark-bg-color);
          color: var(--dark-font-color);
          & a:link, & a:visited,
          & a:hover, & a:active {
            color: var(--dark-link-color);
          }
        }
      }
      @container (500px < inline-size) and (inline-size < 650px) {
        .my-profile {
          grid-template-columns: var(--profile-pic-small-w) 1fr;
          .my-photo {
            width: var(--profile-pic-small-w);
            height: var(--profile-pic-small-w);
          }
          .my-name {
            font-size: 0.8em;
            .ja {
              display: none;  
            }        
          }
          .my-title {
            font-size: 1.2em;
          }

          .my-description {
            .rest {
              display: none;
            }
          }
        } 
      }
      @container (300px < inline-size) and (inline-size < 500px) {
        .my-profile {
          grid-template-columns: 1fr;
          place-items: center;
          .my-photo {
            grid-column: 1 / 1;
            grid-row: 1 / 1;
            width: var(--profile-pic-mid-w);
            height: var(--profile-pic-mid-w);
            justify-content: center;
          }
          .my-name {
            grid-column: 1 / 1;
            grid-row: 2 / 2;
            font-size: 0.6em;
            .ja {
              text-align: center;
              font-size: 1.5em;
            }
          }
          .my-title {
            grid-column: 1 / 1;
            grid-row: 3 / 3;
            font-size: 1.5em;
            .title {
              display: none;
            }
          }
          .my-social {
            margin-top: 10px;
            grid-column: 1 / 1;
            grid-row: 4 / 4;
            justify-content: center;
            .id {
              display: none;
            }
          }
          .my-description {
            display: none;
          }
        }   
      }
      @container (125px < inline-size) and (inline-size < 300px) {
        .my-profile {
          grid-template-columns: 1fr;
          place-items: center;
          padding: 15px;
          .my-photo {
            grid-column: 1 / 1;
            grid-row: 1 / 1;
            width: var(--profile-pic-small-w);
            height: var(--profile-pic-small-w);
            justify-content: center;
          }
          .my-name {
            grid-column: 1 / 1;
            grid-row: 2 / 2;
            font-size: 0.6em;
            .en {
              .last-name {
                display: none;
              }
            }
            .ja {
              display: none;
            }
          }
          .my-title {
            grid-column: 1 / 1;
            grid-row: 3 / 3;
            font-size: 1em;
            .title {
              display: none;
            }
          }
          .my-social {
            display: none;
          }
          .my-description {
            display: none;
          }
        }   
      }
      @container (inline-size < 125px) {
        .my-profile {
          grid-template-columns: 1fr;
          place-items: center;
          padding: 15px;
          .my-photo {
            grid-column: 1 / 1;
            grid-row: 1 / 1;
            width: var(--profile-pic-tiny-w);
            height: var(--profile-pic-tiny-w);
            justify-content: center;
          }
          .my-name {
            display: none;
          }
          .my-title {
            display: none;
          }
          .my-social {
            display: none;
          }
          .my-description {
            display: none;
          }
        }   
      }
    }
    .my-profile {
      font-family: Segoe UI, system-ui, -apple-system, sans-serif;
      color: var(--light-font-color);
      display: grid;
      align-items: center;
      grid-template-columns: var(--profile-pic-large-w) 1fr;
      grid-column-gap:20px;
      grid-row-gap:10px;
      max-width: 900px;
      padding: 30px;
      background-color: var(--light-bg-color);
      box-shadow: var(--material-box-shadow);
      border-radius: 10px;
      transition: background-color 0.5s;
      & a:link, & a:visited {
        color: var(--light-link-color);
        background-color: transparent;
        text-decoration: none;
      }
      & a:hover, & a:active {
        color: var(--light-link-color);
        background-color: transparent;
        text-decoration: underline;
      }
      .my-photo {
        grid-column: 1 / 2;
        grid-row: 1 / 4;
        width: 100%;
        height: var(--profile-pic-large-w);
        border-radius: 50%;
        overflow: hidden;
        border: 100% solid #cacaca;
        box-sizing: border-box;
        > img {
          width: 100%;
        }
      }
      .my-name {
        .en {
          font-size: 2.5em;
          font-weight: 700;
        }
        .ja {
          margin-top: 5px;
          font-size: 1.2em;
          font-weight: 100;
        }
      }
      .my-title {
        font-size: 1.5em;
      }
      .my-social {
        display: flex;
        gap: 15px;
        height: 30px;
        > div {
          display: grid;
          grid-template-columns: 30px 1fr;
          grid-gap: 5px;
        }
        .icon {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 1rem;
        }
        .tw-like .icon {
          background-color: var(--tw-like-bg-color);
        }
        .fb-like .icon {
          background-color: var(--fb-like-bg-color);
          color: white;
        }
        .gh-like .icon {
          background-color: var(--gh-like-bg-color);
        }
        .id {
          display: flex;
          justify-content: left;
          align-items: center;
        }
      }
      .my-description {
        margin-top: 10px;
        grid-column: 1 / 3;
        line-height: 1.5;
        font-size: 1.2em;
      }    
    }
    `;
  }
  getHTML() {
    return /* html*/`
    <div class="container">
      <div class="my-profile">
        <div class="my-photo">
          <img src="https://cdn.glitch.global/656be8d9-e8a7-4871-8cb9-38724c172a12/uskay.jpg">
        </div>
        <div class="my-name">
          <div class="en">
            <span class="first-name">Yusuke</span>
            <span class="last-name">Utsunomiya</span>  
          </div>
          <div class="ja">宇都宮 佑亮（ウツノミヤ ユウスケ）</div>
        </div>
        <div class="my-title">
          <span class="title">Partner Solutions Engineer<span class="comma">,</span></span>
          <span class="company">Google</span>
        </div>
        <div class="my-social">
          <div class="tw-like">
            <div class="icon">🐦</div>
            <div class="id"><a href="/">@uskay</a></div>
          </div>
          <div class="fb-like">
            <div class="icon">🇫</div>
            <div class="id"><a href="/">Yusuke Utsunomiya</a></div>
          </div>
          <div class="gh-like">
            <div class="icon">🐙</div>
            <div class="id"><a href="/">uskay</a></div>
          </div>
        </div>
        <div class="my-description">
          <span class="tldr">Working on the Web Platform, primarily focusing on the Asia Pacific market</span>
          <span class="rest"> and making the navigation experience better. Though, mostly just a big fan of the web and its ecosystem 😉</span>
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define('uskay-profile', MyProfile);