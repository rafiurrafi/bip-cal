//Marquee
Marquee3k.init();

//////////////////////////////////////////////////////////////////////

//Burger menu
let burger_menu = document.querySelector("#burger_menu");
let menu_open = false;

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
  burger_menu.classList.toggle("menu_closed");
}

//////////////////////////////////////////////////////////////////////

//General DDL functionality function (not applied only on DDLs with special cases)

function toggleDDL(container) {
  container.onclick = function () {
    if (
      document.querySelectorAll(".filter_active") &&
      ![...document.querySelectorAll(".filter_active")].includes(this)
    ) {
      document.querySelectorAll(".filter_active").forEach((x) => {
        x.classList.toggle("filter_active");
        x.querySelector(".filter_ddl").classList.toggle("ddl_shown");
        x.querySelector(".arrow_down").classList.toggle("rotate");
      });
    }

    this.classList.toggle("filter_active");
    this.querySelector(".filter_ddl").classList.toggle("ddl_shown");
    this.querySelector(".arrow_down").classList.toggle("rotate");
    this.classList.toggle("ddl_bottom_border");
  };
}

//////////////////////////////////////////////////////////////////////

//Table filters

//Currency
function currencyFilterFunctionality() {
  let container = document.querySelector("#currency_container");
  toggleDDL(container);
}
if (document.querySelector("#currency_container")) {
  currencyFilterFunctionality();
}

//Sort
function sortFilterFunctionality() {
  if (document.querySelector("#sort_container")) {
    let container = document.querySelector("#sort_container");
    toggleDDL(container);
  }
}
sortFilterFunctionality();

//////////////////////////////////////////////////////////////////////

//ASIC page table DDLs
function tableDdl() {
  //all ddl buttons on the page
  let table_ddl_buttons = document.querySelectorAll(".daily_profit_div");

  table_ddl_buttons.forEach((ddl_btn, index) => {
    //upon ddl button click
    ddl_btn.onclick = function () {
      //hiding any PREVIOUSLY opened ddl
      table_ddl_buttons.forEach((x) => {
        if (
          (x.lastElementChild.classList.contains("ddl_shown") ||
            x.lastElementChild.classList.contains("ddl_shown_last")) &&
          x != this
        ) {
          x.lastElementChild.classList.remove("ddl_shown");
          x.lastElementChild.classList.remove("ddl_shown_last");
          x.lastElementChild.previousElementSibling.classList.remove("rotate");
        }
      });

      this.lastElementChild.classList.toggle("ddl_shown");
      this.lastElementChild.previousElementSibling.classList.toggle("rotate");
    };
  });
}
tableDdl();

//////////////////////////////////////////////////////////////////////

//Mode switch (Dark/Light)
var mode = "dark";

//dark mode toggle
document.querySelector("#dark_btn").onclick = function () {
  if (mode != "dark") {
    this.style.fill = "#D9D9D9";
    document.querySelector("#light_btn").style.fill = "#404046";
    mode = "dark";
    changeColor();
  }
};
//light mode toggle
document.querySelector("#light_btn").onclick = function () {
  if (mode != "light") {
    this.style.fill = "#060608";
    document.querySelector("#dark_btn").style.fill = "#D9D9D9";
    mode = "light";
    changeColor();
  }
};

function changeColor() {
  // Access the root element
  const root = document.documentElement;

  if (mode == "dark") {
    //Colors
    root.style.setProperty("--main", "#E5E7E9");
    root.style.setProperty("--darkBasic", "#0E0F12");
    root.style.setProperty("--darkGray", "#16171D");
    root.style.setProperty("--darkGrayLight", "#1A1C21");
    root.style.setProperty("--darkAccent", "#1C2632");
    root.style.setProperty("--fadedMain", "#e5e7e9ac");
    //bg
    document.querySelector(
      "body"
    ).style.backgroundImage = `url("/assets/img/background/bg_dark.webp")`;
    document.querySelector("body").style.backgroundColor = "black";
    //mode bg
    document.querySelector(".mode_container").style.backgroundColor = "#16171D";
    //footer
    document.querySelector(".upper_footer").style.backgroundColor =
      "var(--darkAccent)";
    document.querySelector(".lower_footer").style.backgroundColor =
      "var(--darkBasic)";
    //table rows
    document.querySelectorAll("tr").forEach((x) => {
      x.style.backgroundColor = "var(--darkBasic)";
    });
    //mobile mini rows
    document.querySelectorAll(".mobile_mini_row").forEach((x) => {
      x.style.backgroundColor = "var(--darkBasic)";
    });
    //mobile mini-tables
    document.querySelectorAll(".mobile_mini_table").forEach((x) => {
      x.style.backgroundColor = "var(--darkBasic)";
    });
    //mobile table, model container
    document.querySelectorAll(".model_container").forEach((x) => {
      x.style.backgroundColor = "transparent";
    });
    //model cell container dynamical set
    modelContainerBackgroundSet();
    //faq cards
    if (document.querySelectorAll(".faq_card")) {
      document.querySelectorAll(".faq_card").forEach((x) => {
        x.style.backgroundColor = "var(--darkBasic)";
      });
    }
    //contact form
    if (document.querySelector("#form_container")) {
      document.querySelector("#form_container").style.backgroundColor =
        "var(--darkBasic)";
    }

    //submit buttons
    if (document.querySelector(".styled_btn")) {
      document.querySelectorAll(".styled_btn").forEach((x) => {
        x.classList.remove("light_mode_btn_hover");
      });
    }

    //product img
    if (document.querySelectorAll(".prod_img_container")) {
      document.querySelectorAll(".prod_img_container").forEach((x) => {
        x.style.backgroundColor = "var(--darkBasic)";
      });
    }
    //product
    if (document.querySelector("#specifications_ddl_label")) {
      document.querySelector(
        "#specifications_ddl_label"
      ).style.backgroundColor = "var(--darkBasic)";
    }

    //calculator sidebar bg
    if (document.querySelector("#sidebar_main")) {
      document.querySelector("#sidebar_main").style.backgroundColor =
        "var(--darkBasic)";
    }

    //miners card bg
    if (document.querySelector(".card_controls")) {
      document.querySelectorAll(".card_controls").forEach((x) => {
        x.style.backgroundColor = "var(--blackText)";
      });
    }

    //empty star color
    if (document.querySelector(".empty_star")) {
      document.querySelectorAll(".empty_star").forEach((x) => {
        x.style.fill = "#3c3d3d";
      });
    }

    //graph
    if (document.querySelector("#myChart")) {
      //bg
      document.querySelector("#graph_container").style.backgroundColor =
        "var(--darkBasic)";

      //line color
      data.datasets[0].borderColor = "whitesmoke"; // Replace 'black' with the desired color

      //bg grid color
      options.scales.y.grid.color = "rgba(245, 245, 245, 0.168)";

      myChart.update();
    }

    //scam store
    if (document.querySelector("#scam_store_articles")) {
      document.querySelector("#scam_store_articles").style.backgroundColor =
        "var(--blackText)";

      //rating ddl bg
      document.querySelector("#rating_ddl").style.backgroundColor =
        "var(--darkBasic)";
      document.querySelectorAll(".ranking_source").forEach((x) => {
        x.style.backgroundColor = "var(--darkBasic)";
      });

      //form bg
      document.querySelector(".victim_contact").style.backgroundColor =
        "var(--darkGrayLight)";
    }
  }
  if (mode == "light") {
    //Colors
    root.style.setProperty("--main", "#060608");
    root.style.setProperty("--darkBasic", "#D3D6DD");
    root.style.setProperty("--darkGray", "#D3D6DD");
    root.style.setProperty("--darkGrayLight", "#E1E3E8");
    root.style.setProperty("--darkAccent", "#060608");
    root.style.setProperty("--fadedMain", "#060608b2");
    //bg
    document.querySelector(
      "body"
    ).style.backgroundImage = `url("/assets/img/background/bg_light.webp")`;
    document.querySelector("body").style.backgroundColor = "#E5E7E9";
    //mode bg
    document.querySelector(".mode_container").style.backgroundColor = "#F5F6F7";
    //footer
    document.querySelector(".upper_footer").style.backgroundColor = "#D3D6DD";
    document.querySelector(".lower_footer").style.backgroundColor = "#99A0B1";
    //table rows
    document.querySelectorAll("tr").forEach((x) => {
      x.style.backgroundColor = "var(--lightModeWhite)";
    });
    //mobile mini rows
    document.querySelectorAll(".mobile_mini_row").forEach((x) => {
      x.style.backgroundColor = "var(--lightModeWhite)";
    });
    //mobile mini-tables
    document.querySelectorAll(".mobile_mini_table").forEach((x) => {
      x.style.backgroundColor = "var(--lightModeWhite)";
    });
    //model cell container dynamical set
    modelContainerBackgroundSet();
    //faq cards
    if (document.querySelectorAll(".faq_card")) {
      document.querySelectorAll(".faq_card").forEach((x) => {
        x.style.backgroundColor = "var(--lightModeWhite)";
      });
    }
    //contact form
    if (document.querySelector("#form_container")) {
      document.querySelector("#form_container").style.backgroundColor =
        "var(--lightModeWhite)";
    }

    //submit buttons
    if (document.querySelector(".styled_btn")) {
      document.querySelectorAll(".styled_btn").forEach((x) => {
        x.classList.add("light_mode_btn_hover");
      });
    }

    //product img
    if (document.querySelectorAll(".prod_img_container")) {
      document.querySelectorAll(".prod_img_container").forEach((x) => {
        x.style.backgroundColor = "var(--lightModeWhite)";
      });
    }
    //product
    if (document.querySelector("#specifications_ddl_label")) {
      document.querySelector(
        "#specifications_ddl_label"
      ).style.backgroundColor = "var(--lightModeWhite)";
    }

    //calculator sidebar bg
    if (document.querySelector("#sidebar_main")) {
      document.querySelector("#sidebar_main").style.backgroundColor =
        "var(--lightModeWhite)";
    }

    //miners card bg
    if (document.querySelector(".card_controls")) {
      document.querySelectorAll(".card_controls").forEach((x) => {
        x.style.backgroundColor = "var(--darkGrayLight)";
      });
    }

    //empty star color
    if (document.querySelector(".empty_star")) {
      document.querySelectorAll(".empty_star").forEach((x) => {
        x.style.fill = "#afafaf";
      });
    }

    //graph
    if (document.querySelector("#myChart")) {
      //bg
      document.querySelector("#graph_container").style.backgroundColor =
        "var(--lightModeWhite)";

      //line color
      data.datasets[0].borderColor = "#222325";

      //bg grid color
      options.scales.y.grid.color = "#0e0f1261";

      myChart.update();
    }

    //scam store
    if (document.querySelector("#scam_store_articles")) {
      document.querySelector("#scam_store_articles").style.backgroundColor =
        "var(--lightModeWhite)";

      //rating ddl bg
      document.querySelector("#rating_ddl").style.backgroundColor =
        "var(--lightModeWhite)";
      document.querySelectorAll(".ranking_source").forEach((x) => {
        x.style.backgroundColor = "var(--lightModeWhite)";
      });

      //form bg
      document.querySelector(".victim_contact").style.backgroundColor =
        "var(--lightModeWhite)";
    }
  }
}

//////////////////////////////////////////////////////////////////////

//function for setting the model container color
//it has to be done trough a function because its color depends on the screen width
//and has to be calculated dynamically, in case a large phone user rotates and breaks the mobile width

function modelContainerBackgroundSet() {
  const width = window.innerWidth;

  if (mode == "light") {
    if (width <= 800) {
      document.querySelectorAll(".main_cell").forEach((x) => {
        x.style.backgroundColor = "#E1E3E8";
      });
    } else {
      document.querySelectorAll(".main_cell").forEach((x) => {
        x.style.backgroundColor = "transparent";
      });
    }
  } else {
    if (width <= 800) {
      document.querySelectorAll(".main_cell").forEach((x) => {
        x.style.backgroundColor = "#15161A";
      });
    } else {
      document.querySelectorAll(".main_cell").forEach((x) => {
        x.style.backgroundColor = "transparent";
      });
    }
  }
}

addEventListener("resize", (event) => {
  modelContainerBackgroundSet();

  const width = window.innerWidth;
  if (width <= 800 && advanced_calculator) {
    toggleAdvancedMode();
  }
});

//////////////////////////////////////////////////////////////////////

//Infinite scroll

// table
const table = document.querySelector("table");
// Flag to track if table is being filled
let fillingTable = false;

// Calculate the 85% height breakpoint
const calculateScrollBreakpoint = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  return Math.floor((documentHeight - windowHeight) * 0.85);
};

// Check if the user has reached the scroll breakpoint
function checkScrollBreakpoint() {
  const breakpointHeight = calculateScrollBreakpoint();
  const currentScrollPosition = document.documentElement.scrollTop;

  if (currentScrollPosition >= breakpointHeight && !fillingTable) {
    // Set the flag to indicate filling is in progress
    fillingTable = true;

    //show animation svg
    document.querySelector("#loader").style.display = "flex";

    //2s timeout for the animation and data to arrive
    //here is where you make the ajax call and fill the table with new rows
    //I've simulated 10 new rows just for the test
    setTimeout(() => {
      let i = 10;
      while (i > 0) {
        //instead of 'asicsTable' set the id of the table you want to fill
        //table layout differs for pages, so you've got to write a separate copy
        //of this function for each page (table)
        document.querySelector(
          "#asicsTable"
        ).lastElementChild.innerHTML += `<tr>
                    <td>
                        <div class="main_cell">
                            <div class="two_row_cell">
                                <a class="cell_title" href="#">
                                    Bitmain Antminer KS3
                                    <svg width="14" height="14" viewBox="0 0 13 14" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z"/>
                                    </svg>
                                </a>
                                <span class="second_row green_text">JUNE 2021</span>
                            </div>
    
                            <a href="#" class="mobile_link_icon">
                                <svg width="14" height="14" viewBox="0 0 13 14" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.4 13.5L0 12.1L9.6 2.5H1V0.5H13V12.5H11V3.9L1.4 13.5Z"/>
                                </svg>
                            </a>
                        </div>
    
                        <div class="mobile_mini_table baby_roll">
                            <div class="mini_table_row">
                                <div class="mini_col">
                                    <span class="label">ALGORITHM</span>
                                    <span>KHeavyHash</span>
                                </div>
    
                                <div class="mini_col">
                                    <span class="label">HASHRATE</span>
                                    <span>8.3 <span class="faded">Th/s</span></span>
                                </div>
    
                                <div class="mini_col">
                                    <span class="label">POWER</span>
                                    <span>3425 <span class="faded">W</span>
                                </div>
                            </div>
    
                            <section>
                                <div class="daily_profit_div">
                                    <img src="/assets/img/coins/kaspa.png" alt="coin">
                                    <div class="value_container">
                                        <span class="profit_value">2558.96 USD</span>
                                        <span class="coin_short_name">
                                            KAS
                                        </span>
                                    </div>
                                    <svg class="arrow_down" width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 7.9L0 1.9L1.4 0.5L6 5.1L10.6 0.5L12 1.9L6 7.9Z"/>
                                    </svg>
                                    <div class="table_ddl">
                                        <ul>
                                            <li>
                                                <div class="table_ddl_item">
                                                    <img src="/assets/img/coins/kaspa.png" alt="coin">
                                                    <div class="value_container">
                                                        <span class="profit_value">2558.96 USD</span>
                                                        <span class="coin_short_name">
                                                            KAS
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="table_ddl_item">
                                                    <img src="/assets/img/coins/kaspa.png" alt="coin">
                                                    <div class="value_container">
                                                        <span class="profit_value">2558.96 USD</span>
                                                        <span class="coin_short_name">
                                                            KAS
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="table_ddl_item">
                                                    <img src="/assets/img/coins/kaspa.png" alt="coin">
                                                    <div class="value_container">
                                                        <span class="profit_value">2558.96 USD</span>
                                                        <span class="coin_short_name">
                                                            KAS
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </td>
                    <td class="hide-on-mobile">
                        KHeavyHash
                    </td>
                    <td class="hide-on-mobile">
                        8.3 <span class="faded">Th/s</span>
                    </td>
                    <td class="hide-on-mobile">
                        3425 <span class="faded">W</span>
                    </td>
                    <td class="hide-on-mobile">
                        <div class="daily_profit_div">
                            <img src="/assets/img/coins/kaspa.png" alt="coin">
                            <div class="value_container">
                                <span class="profit_value">2558.96 USD</span>
                                <span class="coin_short_name">
                                    KAS
                                </span>
                            </div>
                            <svg class="arrow_down" width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 7.9L0 1.9L1.4 0.5L6 5.1L10.6 0.5L12 1.9L6 7.9Z"/>
                            </svg>
                            <div class="table_ddl">
                                <ul>
                                    <li>
                                        <div class="table_ddl_item">
                                            <img src="/assets/img/coins/kaspa.png" alt="coin">
                                            <div class="value_container">
                                                <span class="profit_value">2558.96 USD</span>
                                                <span class="coin_short_name">
                                                    KAS
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="table_ddl_item">
                                            <img src="/assets/img/coins/kaspa.png" alt="coin">
                                            <div class="value_container">
                                                <span class="profit_value">2558.96 USD</span>
                                                <span class="coin_short_name">
                                                    KAS
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="table_ddl_item">
                                            <img src="/assets/img/coins/kaspa.png" alt="coin">
                                            <div class="value_container">
                                                <span class="profit_value">2558.96 USD</span>
                                                <span class="coin_short_name">
                                                    KAS
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </td>
                </tr>`;
        i--;
      }
      // Reset the flag, hide the animation and set event listeners for the newly added row ddls
      fillingTable = false;
      document.querySelector("#loader").style.display = "none";
      tableDdl();
      //after adding the rows, calling the mode check function so the newly added rows are also affected
      changeColor();
    }, 2000);
  }
}

// Event listener on scroll
window.addEventListener("scroll", () => {
  //Uncomment to start using infinite scroll
  //Check if the page you want to use it on, has '#loader' div in the HTML code (Found on 'ASIC' page)

  checkScrollBreakpoint();
});

//////////////////////////////////////////////////////////////////////

//FAQ accordion
if (document.querySelector(".faq_title_container")) {
  document
    .querySelectorAll(".faq_title_container")
    .forEach(function (container) {
      var content = container.nextElementSibling;
      container.addEventListener("click", function () {
        //smooth height transition
        if (content.classList.contains("faq_card_open")) {
          content.style.maxHeight = "0px";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }

        //class toggle
        content.classList.toggle("faq_card_open");

        //active card bg-color change
        if (mode == "dark") {
          if (content.classList.contains("faq_card_open")) {
            this.parentElement.style.backgroundColor = "var(--darkGrayLight)";
          } else {
            this.parentElement.style.backgroundColor = "var(--darkBasic)";
          }
        } else {
          if (content.classList.contains("faq_card_open")) {
            this.parentElement.style.backgroundColor = "#E1E3E8";
          } else {
            this.parentElement.style.backgroundColor = "var(--lightModeWhite)";
          }
        }

        //arrow rotate
        container.querySelector(".arrow_down").classList.toggle("rotate");
      });
    });
}

//////////////////////////////////////////////////////////////////////

//Reason filter DDL
function reasonFilterFunctionality() {
  let container = document.querySelector("#reason_container");
  toggleDDL(container);
}
if (document.querySelector("#reason_container")) {
  reasonFilterFunctionality();
}

//////////////////////////////////////////////////////////////////////

//Metric DDLs
function metricFilterFunctionality() {
  let metric_containers = document.querySelectorAll(".metric_container");
  metric_containers.forEach((x) => {
    x.onclick = function () {
      if (
        document.querySelectorAll(".filter_active") &&
        ![...document.querySelectorAll(".filter_active")].includes(this)
      ) {
        document.querySelectorAll(".filter_active").forEach((x) => {
          x.classList.toggle("filter_active");
          x.querySelector(".filter_ddl").classList.toggle("ddl_shown");
          x.querySelector(".arrow_down").classList.toggle("rotate");
        });
      }

      this.classList.toggle("filter_active");
      this.querySelector(".filter_ddl").classList.toggle("ddl_shown");
      this.querySelector(".arrow_down").classList.toggle("rotate");
    };
  });
}
if (document.querySelectorAll(".metric_container")) {
  metricFilterFunctionality();
}

//////////////////////////////////////////////////////////////////////

//Specifications accordion (Mobile)
if (document.querySelector("#specifications_ddl_container")) {
  document
    .querySelector("#specifications_ddl_label")
    .addEventListener("click", function () {
      //smooth height transition
      if (
        document
          .querySelector("#specifications_ddl_content")
          .classList.contains("faq_card_open")
      ) {
        document.querySelector("#specifications_ddl_content").style.maxHeight =
          "0px";
        document
          .querySelector("#specifications_ddl_label")
          .classList.toggle("bottom_radius_off");
      } else {
        document.querySelector("#specifications_ddl_content").style.maxHeight =
          document.querySelector("#specifications_ddl_content").scrollHeight +
          32 +
          "px";
        document
          .querySelector("#specifications_ddl_label")
          .classList.toggle("bottom_radius_off");
      }

      //class toggle
      document
        .querySelector("#specifications_ddl_content")
        .classList.toggle("faq_card_open");

      //arrow rotate
      document
        .querySelector("#specifications_ddl_label")
        .querySelector(".arrow_down")
        .classList.toggle("rotate");
    });
}

//////////////////////////////////////////////////////////////////////

//Period filter DDL
function periodFilterFunctionality() {
  let container = document.querySelector("#period_container");
  toggleDDL(container);
}
if (document.querySelector("#period_container")) {
  periodFilterFunctionality();
}

//////////////////////////////////////////////////////////////////////

//BASIC Calculator
if (document.querySelector("#calculator_table")) {
  //Period DDL
  function periodSidebarFilterFunctionality() {
    let container = document.querySelector("#sidebar_period_container");
    toggleDDL(container);
  }

  //Currency DDL
  function currencySidebarFilterFunctionality() {
    let container = document.querySelector("#sidebar_currency_container");
    toggleDDL(container);
  }

  //Algorithm DDL
  function algorithmSidebarFilterFunctionality() {
    let container = document.querySelector("#sidebar_algorithm_container");
    toggleDDL(container);
  }

  //'just_consumption' unit DDL
  function unitSidebarFilterFunctionality() {
    let container = document.querySelector("#sidebar_hashpower_unit_ddl");

    container.onclick = function () {
      if (
        document.querySelectorAll(".filter_active") &&
        ![...document.querySelectorAll(".filter_active")].includes(this)
      ) {
        document.querySelectorAll(".filter_active").forEach((x) => {
          x.classList.toggle("filter_active");
          x.querySelector(".filter_ddl").classList.toggle("ddl_shown");
          x.querySelector(".arrow_down").classList.toggle("rotate");
        });
      }
      this.classList.toggle("filter_active");
      this.querySelector(".filter_ddl").classList.toggle("ddl_shown");
      this.querySelector(".arrow_down").classList.toggle("rotate");
      this.classList.toggle("ddl_bottom_border");
    };
  }

  //////////////////////////////////////////////////////////////////////

  //ADVANCED Calculator

  //Flag
  var advanced_calculator = false;

  function toggleAdvancedMode(btn_pressed = false) {
    //current width
    const width = window.innerWidth;

    //show button animation
    document.querySelector("#adv_calc_btn").classList.toggle("faded");
    document.querySelector("#btn_circle").classList.toggle("faded");
    document.querySelector("#btn_circle").classList.toggle("circle_animate");

    if (!advanced_calculator) {
      if (width >= 800) {
        //show filters
        document.querySelector("#filters").classList.add("show_toggle");
        //hide basic table
        document.querySelector("#calculator_table").style.display = "none";
        //show advanced table
        document.querySelector("#advanced_calc_table").style.display = "table";
        //phone msg hide
        document
          .querySelector("#no_adv_on_mobile")
          .classList.remove("show_toggle");
        //hide basic config
        document.querySelector("#sidebar_main").style.display = "flex";
        document.querySelector("#basic_config").style.display = "none";
        //show advanced config
        document.querySelector("#advanced_config").style.display = "flex";
      } else {
        //hide filters
        document.querySelector("#filters").classList.remove("show_toggle");
        //hide basic table
        document.querySelector("#calculator_table").style.display = "none";
        //hide advanced table
        document.querySelector("#advanced_calc_table").style.display = "none";
        //show phone msg
        document
          .querySelector("#no_adv_on_mobile")
          .classList.add("show_toggle");
        //hide basic config
        document.querySelector("#sidebar_main").style.display = "none";
        //hide advanced config
        document.querySelector("#advanced_config").style.display = "none";
      }

      //btn label change
      document.querySelector("#btn_label").innerHTML = "ADVANCED CALCULATOR";

      //flag change
      advanced_calculator = true;
    } else {
      //phone msg hide
      document
        .querySelector("#no_adv_on_mobile")
        .classList.remove("show_toggle");
      //hide filters
      document.querySelector("#filters").classList.remove("show_toggle");
      //hide advanced table
      document.querySelector("#advanced_calc_table").style.display = "none";
      //hide advanced sidebar
      document.querySelector("#advanced_config").style.display = "none";

      //show table
      document.querySelector("#calculator_table").style.display = "table";
      //show basic config
      document.querySelector("#sidebar_main").style.display = "flex";
      document.querySelector("#basic_config").style.display = "flex";

      //btn label change
      document.querySelector("#btn_label").innerHTML = "BASIC CALCULATOR";

      //flag change
      advanced_calculator = false;
    }
  }

  //////////////////////////////////////////////////////////////////////

  //Totals row
  function calculateTotal() {
    //gross
    let gross_total = 0;
    let gross_cells = document.querySelectorAll(".gross_cell");
    gross_cells.forEach((x) => {
      gross_total += Number(x.querySelector(".value").innerHTML);
    });
    document.querySelector("#gross_total").innerHTML =
      "$ " + gross_total.toFixed(2);

    //costs
    let costs_total = 0;
    let costs_cells = document.querySelectorAll(".costs_cell");
    costs_cells.forEach((x) => {
      costs_total += Number(x.querySelector(".value").innerHTML);
    });
    document.querySelector("#costs_total").innerHTML =
      "$ " + costs_total.toFixed(2);

    //net
    let net_total = 0;
    let net_cells = document.querySelectorAll(".net_cell");
    net_cells.forEach((x) => {
      net_total += Number(x.querySelector(".value").innerHTML);
    });
    document.querySelector("#net_total").innerHTML =
      "$ " + net_total.toFixed(2);
  }
  calculateTotal();

  //////////////////////////////////////////////////////////////////////

  //MINER CARDS

  //card id number, used for marking which table represents which miners card in the sidebar
  //this way removing the rows and cards is made much easier
  var card_id = 1; //***KEEP IT'S VALUE '1' INITIALLY***

  //Remove
  function removeCardAndRow() {
    //removing the card
    let id_for_removal =
      this.parentElement.parentElement.getAttribute("data-card-id");

    const elements_for_removal = document.querySelectorAll(
      '[data-card-id="' + id_for_removal + '"]'
    );

    elements_for_removal.forEach((x) => {
      x.remove();
    });

    //number of cards check
    const number_of_cards =
      document.querySelector("#miner_cards").childElementCount;
    if (number_of_cards == 0) {
      //empty the table
      const table = document.querySelector("#advanced_calc_table");
      table.querySelector("tbody").innerHTML = "";

      //fill with 'no result' message
      table.querySelector("tbody").innerHTML = `
            <tr id="no_result_row">
                <td id="no_result_msg" colspan="5">
                    <h2>EMPTY DATASET</h2>
                    <span>There are no results for this dataset.</span>
                </td>
            </tr>
            `;
    }

    //Recalculate totals
    calculateTotal();
  }

  //Duplicate
  function duplicateCard() {
    //cloning the card
    const clone = this.parentElement.parentElement.cloneNode(true);

    //adding the card_id parameter
    clone.setAttribute("data-card-id", card_id);

    //setting the quantity to '1'
    clone.querySelector(".styled_input").value = 1;

    //adding clone to the card list
    document.querySelector("#miner_cards").appendChild(clone);

    //adding a new row with the same card_id
    newTableRow(card_id);

    //Recalculate totals
    calculateTotal();

    //adding event listeners for the new cards
    AddCardOptionsEventListeners();

    //increasing it globally
    ++card_id;
  }

  //Value type check function
  function isPureNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
  }

  //Quantity Change
  function quantityChange() {
    // Get the previous value from the custom attribute
    const previousValue =
      this.dataset.previousValue != "" ? this.dataset.previousValue : 1;

    //value converted to number type
    let input_value = Number(this.value);

    //card which the input is in
    const current_card = this.parentElement.parentElement.parentElement;
    let card_id = current_card.dataset.cardId;

    //table element
    let table = document.querySelector("#advanced_calc_table");
    //get the number of rows
    let rows_count = table.querySelectorAll(
      '[data-card-id="' + card_id + '"]'
    ).length;

    if (input_value != 0 && isPureNumber(input_value)) {
      //check if the newly set value is higher or lower so you know what to do with table rows
      if (input_value < previousValue) {
        //lower
        //removing rows until the cout of them is the same as quantity set
        while (rows_count != input_value) {
          //removing row
          table.querySelector('[data-card-id="' + card_id + '"]').remove();
          //recalculate the number of rows
          rows_count = table.querySelectorAll(
            '[data-card-id="' + card_id + '"]'
          ).length;
        }
      } else {
        //higher
        //adding rows until the cout of them is the same as quantity set
        while (rows_count != input_value) {
          //add new row
          newTableRow(card_id);
          //recalculate the number of rows
          rows_count = table.querySelectorAll(
            '[data-card-id="' + card_id + '"]'
          ).length;
        }
      }

      // Update the "data-previous-value" attribute with the current valid value
      this.dataset.previousValue = input_value;

      //Recalculate totals
      calculateTotal();
    } else {
      // If the current value is not a pure number or 0, revert to the previous value
      this.value = previousValue;
    }
  }

  //////////////////////////////////////////////////////////////////////

  //New Table Row Function
  function newTableRow(card_id) {
    const table = document.querySelector("#advanced_calc_table");
    //fill with new row
    table.querySelector("tbody").innerHTML += `
        <tr data-card-id="${card_id}">
            <td>
                <div class="main_cell cell_w_img">
                    <div class="cell_img_container">
                        <img src="/assets/img/calculator/litecoin.png" alt="manufacturer">
                    </div>
                    
                    <div class="two_row_cell">
                        <span class="cell_title no_link">
                            LiteCoin
                        </span>
                        <span class="second_row faded">LTC</span>
                    </div>

                    <div class="show_on_mobile profit_ratio_cell two_row_cell ">
                        <div class="second_row one_row_cell">
                            <span class="faded">PROFIT RATIO</span>
                            <svg class="i faded" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33331 10.334H7.66665V6.33398H6.33331V10.334ZM6.99998 5.00065C7.18887 5.00065 7.3472 4.93676 7.47498 4.80898C7.60276 4.68121 7.66665 4.52287 7.66665 4.33398C7.66665 4.1451 7.60276 3.98676 7.47498 3.85898C7.3472 3.73121 7.18887 3.66732 6.99998 3.66732C6.81109 3.66732 6.65276 3.73121 6.52498 3.85898C6.3972 3.98676 6.33331 4.1451 6.33331 4.33398C6.33331 4.52287 6.3972 4.68121 6.52498 4.80898C6.65276 4.93676 6.81109 5.00065 6.99998 5.00065ZM6.99998 13.6673C6.07776 13.6673 5.21109 13.4923 4.39998 13.1423C3.58887 12.7923 2.88331 12.3173 2.28331 11.7173C1.68331 11.1173 1.20831 10.4118 0.858313 9.60065C0.508313 8.78954 0.333313 7.92287 0.333313 7.00065C0.333313 6.07843 0.508313 5.21176 0.858313 4.40065C1.20831 3.58954 1.68331 2.88398 2.28331 2.28398C2.88331 1.68398 3.58887 1.20898 4.39998 0.858984C5.21109 0.508984 6.07776 0.333984 6.99998 0.333984C7.9222 0.333984 8.78887 0.508984 9.59998 0.858984C10.4111 1.20898 11.1166 1.68398 11.7166 2.28398C12.3166 2.88398 12.7916 3.58954 13.1416 4.40065C13.4916 5.21176 13.6666 6.07843 13.6666 7.00065C13.6666 7.92287 13.4916 8.78954 13.1416 9.60065C12.7916 10.4118 12.3166 11.1173 11.7166 11.7173C11.1166 12.3173 10.4111 12.7923 9.59998 13.1423C8.78887 13.4923 7.9222 13.6673 6.99998 13.6673ZM6.99998 12.334C8.48887 12.334 9.74998 11.8173 10.7833 10.784C11.8166 9.75065 12.3333 8.48954 12.3333 7.00065C12.3333 5.51176 11.8166 4.25065 10.7833 3.21732C9.74998 2.18398 8.48887 1.66732 6.99998 1.66732C5.51109 1.66732 4.24998 2.18398 3.21665 3.21732C2.18331 4.25065 1.66665 5.51176 1.66665 7.00065C1.66665 8.48954 2.18331 9.75065 3.21665 10.784C4.24998 11.8173 5.51109 12.334 6.99998 12.334Z"/>
                            </svg>
                            <div class="profit_ratio_info_container">
                                Gains or losses on a coin based on percentage.
                            </div>
                        </div>
                        <span class="cell_title">10%</span>
                    </div>
                </div>

                <div class="mobile_mini_table">
                    <div class="mini_table_row">
                        <div class="mini_col">
                            <span class="label">GROSS DAILY</span>
                            <div class="two_row_cell">
                                <span class="mini_cell_value">$2224.41</span>
                                <span class="second_row faded">0.78 LTC</span>
                            </div>
                        </div>

                        <div class="mini_col">
                            <span class="label">COSTS DAILY</span>
                            <div class="two_row_cell">
                                <span class="mini_cell_value">$7.22</span>
                                <span class="second_row faded">0.03 LTC</span>
                            </div>
                        </div>

                        <div class="mini_col">
                            <span class="label">NET DAILY</span>
                            <div class="two_row_cell">
                                <span class="mini_cell_value">$2217.19</span>
                                <span class="second_row faded">0.75 LTC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td class="hide-on-mobile">
                10%
            </td>
            <td class="hide-on-mobile gross_cell">
                <div class="two_row_cell">
                    <span>$ <span class="value">2224.41</span> </span>
                    <span class="second_row faded">0.78 LTC</span>
                </div>
            </td>
            <td class="hide-on-mobile costs_cell">
                <div class="two_row_cell">
                    <span>$ <span class="value">7.22</span> </span>
                    <span class="second_row faded">0.03 LTC</span>
                </div>
            </td>
            <td class="hide-on-mobile costs_cell">
                <div class="two_row_cell">
                    <span>$ <span class="value">8.22</span> </span>
                    <span class="second_row faded">0.03 LTC</span>
                </div>
            </td>
            <td class="hide-on-mobile net_cell">
                <div class="two_row_cell">
                    <span class="bold">$ <span class="bold value">2217.19</span> </span>
                    <span class="second_row faded">0.75 LTC</span>
                </div>
            </td>
        </tr>
        `;
    //Changes newly added rows bg if in light mode
    changeColor();
  }

  //////////////////////////////////////////////////////////////////////

  //Add miner (POPUP)

  //Popup setup

  //Opening
  document.querySelector("#miner_btn").onclick = () => {
    document.querySelector("#add_miner_popup").classList.toggle("show_toggle");
  };

  //Closing
  document.querySelector("#add_miner_popup").onclick = (click) => {
    if (click.target.id === "add_miner_popup") {
      document
        .querySelector("#add_miner_popup")
        .classList.toggle("show_toggle");
    }
  };

  //Model DDL
  function popupModelDdlFunctionality() {
    let container = document.querySelector("#popup_model_container");

    toggleDDL(container);
  }
  popupModelDdlFunctionality();

  //'Add miner' btn trigger
  document.querySelector("#popup_miner_btn").onclick = () => {
    //Here you'll add the code that modifies the card so it's filled with real data

    //Adding a placeholder card
    addMinerCard();
  };

  //Add miner function
  function addMinerCard() {
    //cards count check in case there was 0
    const number_of_cards =
      document.querySelector("#miner_cards").childElementCount;
    if (number_of_cards == 0) {
      //remove the 'no result message'
      document.querySelector("#no_result_row").remove();
    }

    //placeholder card
    let placeholder_row = `
        <div class="miner_card" data-card-id="${card_id}">
            <div class="card_details">
                <!--Miner details-->
                <div class="card_text">
                    <span class="miner_brand faded">
                        ASIC
                    </span>
                    <span class="miner_model cell_title">
                        Antminer X3
                    </span>
                </div>

                <!--Quantity input-->
                <div class="miner_quantity styled_input_container">
                    <input type="text" class="styled_input" name="miner_quantity" value="1" data-previous-value="" maxlength="1"/>
                </div>
            </div>
            
            <!--Card controls-->
            <div class="card_controls">
                <span class="details_option faded">
                    DETAILS
                </span>
                <span class="duplicate_option faded">
                    DUPLICATE
                </span>
                <span class="remove_option faded">
                    REMOVE
                </span>
            </div>
        </div>
        `;

    //Adding card to the card list
    document.querySelector("#miner_cards").innerHTML += placeholder_row;

    //Adding a new row with the same card_id
    newTableRow(card_id);

    //Recalculate totals
    calculateTotal();

    //Adding event listeners for the new cards
    AddCardOptionsEventListeners();

    //Increasing card_id globally
    ++card_id;

    //Closing the popup
    document.querySelector("#add_miner_popup").classList.toggle("show_toggle");
  }

  //////////////////////////////////////////////////////////////////////

  //Miner card details (POPUP)

  //popup setup

  //Algorithm DDL
  function detailsPopupAlgorithmDdlFunctionality() {
    let container = document.querySelector("#popup_algorithm_container");
    toggleDDL(container);
  }
  detailsPopupAlgorithmDdlFunctionality();

  //Coin DDL
  function popupCoinDdlFunctionality() {
    let container = document.querySelector("#popup_coin_container");
    toggleDDL(container);
  }
  popupCoinDdlFunctionality();

  //Hashpower unit DDL
  function popupHashpowerDdlFunctionality() {
    let container = document.querySelector("#popup_hashpower_unit_ddl");
    toggleDDL(container);
  }
  popupHashpowerDdlFunctionality();

  //'Add miner' btn trigger
  document.querySelector("#popup_details_btn").onclick = () => {
    //Here you'll add the code that applies the changes to the card the card so it's updated with real data

    //Closing the popup
    document
      .querySelector("#details_miner_popup")
      .classList.toggle("show_toggle");
  };

  //////////////////////////////////////////////////////////////////////

  //Event listeners CALCULATOR PAGE

  periodSidebarFilterFunctionality();
  currencySidebarFilterFunctionality();
  algorithmSidebarFilterFunctionality();
  unitSidebarFilterFunctionality();

  document.querySelector("#adv_calc_btn").onclick = toggleAdvancedMode;

  //MINER CARD event listeners function
  function AddCardOptionsEventListeners() {
    if (document.querySelector(".miner_card")) {
      //remove
      document.querySelectorAll(".remove_option").forEach((x) => {
        x.onclick = removeCardAndRow;
      });

      //duplicate
      document.querySelectorAll(".duplicate_option").forEach((x) => {
        x.onclick = duplicateCard;
      });

      //quantity change
      document.getElementsByName("miner_quantity").forEach((x) => {
        x.onchange = quantityChange;
      });

      //details
      if (document.querySelector("#miner_btn")) {
        //opening
        document.querySelectorAll(".details_option").forEach((x) => {
          x.onclick = () => {
            document
              .querySelector("#details_miner_popup")
              .classList.toggle("show_toggle");
          };
        });

        //closing
        document.querySelector("#details_miner_popup").onclick = (click) => {
          if (click.target.id === "details_miner_popup") {
            document
              .querySelector("#details_miner_popup")
              .classList.toggle("show_toggle");
          }
        };
      }
    }
  }
  AddCardOptionsEventListeners();
}

//////////////////////////////////////////////////////////////////////

//Rating DDL

function ratingDdlFunctionality() {
  if (document.querySelector("#rating_ddl")) {
    document
      .querySelector("#rating_ddl")
      .addEventListener("click", function () {
        //smooth height transition
        if (
          this.querySelector(".filter_ddl").classList.contains("faq_card_open")
        ) {
          this.querySelector(".filter_ddl").style.maxHeight = "0px";
          this.classList.toggle("bottom_radius_off");
        } else {
          this.querySelector(".filter_ddl").style.maxHeight =
            this.querySelector(".filter_ddl").scrollHeight + "px";
          this.classList.toggle("bottom_radius_off");
        }

        //class toggle
        this.querySelector(".filter_ddl").classList.toggle("faq_card_open");

        //arrow rotate
        this.querySelector(".arrow_down").classList.toggle("rotate");
      });
  }
}
ratingDdlFunctionality();

//////////////////////////////////////////////////////////////////////

//Articles toggler

if (document.querySelector("#scam_store_articles")) {
  document.querySelector("#article_toggler").onclick = function () {
    document
      .querySelector("#scam_store_articles")
      .querySelectorAll("article")
      .forEach((a, i) => {
        if (i != 0) {
          a.classList.toggle("hide-on-mobile");
        }
      });

    let value = this.innerHTML == "READ MORE" ? "HIDE" : "READ MORE";
    this.innerHTML = value;
  };
}

//////////////////////////////////////////////////////////////////////

//Chart.js
if (document.querySelector("#myChart")) {
  // Get the canvas context
  const ctx = document.querySelector("#myChart").getContext("2d");

  const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector("div");
    //tooltip container
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.id = "tooltip";
      tooltipEl.style.opacity = 1;
      tooltipEl.style.pointerEvents = "none";
      tooltipEl.style.position = "absolute";
      tooltipEl.style.transform = "translate(-50%, 0)";
      tooltipEl.style.transition = "all .1s ease";

      //title
      const table = document.createElement("table");
      table.style.margin = "0px";

      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
  };

  const externalTooltipHandler = (context) => {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = getOrCreateTooltip(chart);

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map((b) => b.lines);

      //tooltip head
      const tableHead = document.createElement("thead");

      titleLines.forEach((title) => {
        const tr = document.createElement("tr");
        tr.style.borderWidth = 0;
        tr.style.textAlign = "center";

        const th = document.createElement("th");
        th.style.borderWidth = 0;
        const text = document.createTextNode(title);

        th.appendChild(text);
        tr.appendChild(th);
        tableHead.appendChild(tr);
      });

      //tooltip body
      const tableBody = document.createElement("tbody");
      bodyLines.forEach((body, i) => {
        const tr = document.createElement("tr");
        tr.style.backgroundColor = "inherit";
        tr.style.borderWidth = 0;

        const td = document.createElement("td");
        td.style.borderWidth = 0;

        let text = document.createTextNode("$ " + body);
        td.appendChild(text);

        tr.appendChild(td);
        tableBody.appendChild(tr);
      });

      const tableRoot = tooltipEl.querySelector("table");

      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }

      // Add new children
      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + "px";
    tooltipEl.style.top = positionY + tooltip.caretY + "px";
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding =
      tooltip.options.padding + "px " + tooltip.options.padding + "px";
  };

  // Chart data
  var data = {
    datasets: [
      {
        //these are the points that will show the values upon hovering (Y axis is defined based on them)
        data: [2.5, -1.5, 0, -3, 0, 1, 3, 1],

        borderColor: "whitesmoke", // Border color for the line
        tension: 0.3, // Control the curvature of the line (less = more curvy)

        pointBackgroundColor: "#555D71", // Change the color of the points
        pointRadius: 5, // Increase the size of the points
      },
    ],
  };

  // Chart options
  var options = {
    font: {
      family: "'Inter', sans-serif",
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        //horizontal axis values
        labels: [
          "07.01.",
          "07.02.",
          "07.03.",
          "07.04.",
          "07.05.",
          "07.06.",
          "07.07.",
        ],
        ticks: {
          // Customize the font size and color of the Y-axis tick labels
          font: {
            size: 13, // Set the font size in pixels
            color: "var(--main)", // Set the font color
            weight: "normal", // Set the font weight
          },
        },
        grid: {
          color: "transparent", // Change the background table line color for Y-axis
        },
      },

      y: {
        ticks: {
          // Use a callback function to add '$' in front of each tick value
          callback: function (value, index, values) {
            return "$" + value;
          },

          // Customize the font size and color of the Y-axis tick labels
          font: {
            size: 13, // Set the font size in pixels
            color: "var(--main)", // Set the font color
            weight: "normal", // Set the font weight
          },
        },
        grid: {
          drawTicks: false,
          color: "rgba(245, 245, 245, 0.168)", // Change the background table line color for Y-axis
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Set this to 'false' to hide the legend completely
      },
      tooltip: {
        enabled: false,
        position: "nearest",
        external: externalTooltipHandler,
      },
    },
  };

  // Create the chart
  var myChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
}

//////////////////////////////////////////////////////////////////////
