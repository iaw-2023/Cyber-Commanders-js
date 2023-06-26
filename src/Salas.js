import React, { useEffect, useState } from "react";
import axios from "axios";
import CuadroSala from "./componentes/CuadroSala";

export default function Salas() {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyber-commanders-laravel.vercel.app/rest/salas")
      .then((response) => setSalas(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full bg-gray-800">
      <div className=" text-center ">
        <h1 className="text-gray-100 text-4xl p-3 ">NUESTRAS SALAS</h1>
      </div>
      <div className="w-screen py-6 bg-gray-800 flex items-center justify-center flex-wrap">
        {salas.map((sala) => (
          <CuadroSala sala={sala} key={sala.id} />
        ))}
      </div>
    </div>
  );
}

{
  /*


<>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
        rel="stylesheet"
      />

      <section className={salasCss.section_plans} id="section-plans">
        <div
          className={salasCss.u_center_text + " " + salasCss.u_margin_top_big}
        >
          <h2 className={salasCss.heading_secondary}>
            Contamos con estas salas:
          </h2>
        </div>

        <div className="flex-row">
          <div className={salasCss.row}>


            
            <div className={salasCss.col_1_of_3}>
              <div className={salasCss.card}>
                <div
                  className={
                    salasCss.card__side + " " + salasCss.card__side__front_3
                  }
                >
                  <div
                    className={
                      salasCss.card__title + " " + salasCss.card__title__3
                    }
                  >
                    <h4 className={salasCss.card__heading}>Pro</h4>
                  </div>
                  <div className={salasCss.card__details}>
                    <ul>
                      <li>Includes Plus Plan Features</li>
                      <li>High Performance</li>
                      <li>2 Spam Experts</li>
                      <li>Free SSL Certificate</li>
                      <li>Domain Privacy</li>
                      <li>Site Backup - CodeGuard Basic</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={
                    salasCss.card__side +
                    " " +
                    salasCss.card__side__back +
                    " " +
                    salasCss.card__side__back_3
                  }
                >
                  <div className={salasCss.card__cta}>
                    <div className={salasCss.card__price_box}>
                      <p className={salasCss.card__price_only}>Only</p>
                      <p className={salasCss.card__price_value}>$13.95/mo</p>
                    </div>
                    <a
                      href="#popup"
                      className={salasCss.btn + " " + salasCss.btn__white}
                    >
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


<>
        <div className="row">
          {salas.map((sala) => (
            <CuadroSala sala={sala} key={sala.id} />
          ))}
        </div>
        </>













 <div className="row">
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front-1">
            <div className="card__title card__title--1">
              <i className="fas fa-paper-plane" />
              <h4 className="card__heading">Basic</h4>
            </div>
            <div className="card__details">
              <ul>
                <li>1 Website</li>
                <li>50 GB SSD Storage</li>
                <li>Unmetered Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>1 Included Domain</li>
                <li>1 Included Domain</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$2.95/mo*</p>
              </div>
              <a href="#popup" className="btn btn--white">
                Select
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front-2">
            <div className="card__title card__title--2">
              <i className="fas fa-plane" />
              <h4 className="card__heading">Plus</h4>
            </div>
            <div className="card__details">
              <ul>
                <li>Includes Basic Package Features</li>
                <li>Unlimited Websites</li>
                <li>Unlimited SSD Storage</li>
                <li>Unlimited Domains</li>
                <li>Unlimited Parked Domains</li>
                <li>Unlimited Sub Domains</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-2">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$5.45/mo*</p>
              </div>
              <a href="#popup" className="btn btn--white">
                Select
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front-3">
            <div className="card__title card__title--3">
              <i className="fas fa-rocket" />
              <h4 className="card__heading">Pro</h4>
            </div>
            <div className="card__details">
              <ul>
                <li>Includes Plus Plan Features</li>
                <li>High Performance</li>
                <li>2 Spam Experts</li>
                <li>Free SSL Certificate</li>
                <li>Domain Privacy</li>
                <li>Site Backup - CodeGuard Basic</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$13.95/mo</p>
              </div>
              <a href="#popup" className="btn btn--white">
                Select
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="u-center-text u-margin-top-huge">
      <a href="#" className="btn btn--green">
        Get Started
      </a>
    </div>











*/
}
