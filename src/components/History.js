import React, { Component } from 'react';
import Header from './Header';

import Footer from './Footer';
import karateImage from '/assets/agena_group.jpg';
import shimabuku_sai from '/assets/shimabuku-sai.jpg';
import shimabuku_bust from '/assets/shimabuku_bust.jpg';
import agena_outside from '/assets/agena_outside.jpg';


class History extends Component {

  render() {

    return (
      <div className="history-bg">
        <Header />
        <div className='bannerWrapper history'>
          <div className='bannerTitle'>History</div>
          {/* <div><img src={newsletterImage} className='responsiveImage' alt="newsletter" /></div> */}
        </div>

        <div className="container py-5">

          <section>
            <div id="accordion">
              <div class="card mb-3">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Early Karate History
        </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <p>Unfortunately there was little written about the early development of martial arts. Most of the history we have learned has been orally transmitted down through the centuries from teacher to student. A need for the refinement of fighting techniques came about due to mans basic survival instinct and the defense of family and possessions.</p>
                    <p>Okinawa, the largest of the Ryukyu Islands is strategically located between China and Japan. Both countries have occupied the islands at different times throughout history. Okinawan/Japanese karate had influences from many parts of the world, especially China. At the end of the 5th century A.D. a Buddhist priest by the name of Bodhidharma (Daruma in Japanese) traveled to China from India where he taught monks meditation and basic Indian fighting exercises. These moves evolved into what was later to become known as kung fu, Chu'an-fa, kempo and Chinese Boxing. Chinese boxing eventually made it's way to Okinawa.</p>
                    <p>Okinawa had its own form of martial art; an aggressive closed fisted style known as te (hand). The king of Okinawa outlawed the possession of weapons in the mid fourteen hundreds. In 1609 the Satsuma clan of Japan invaded and, to control the population, reinstated the ban on owning weapons and training in the martial arts. Anyone caught disobeying would be severely punished. This resulted in te being practiced in secrecy. These bans accelerated the development of te as a way to fight oppression.</p>
                    <p>In the mid 1800's Satsunuku Sakagawa, the number one student of te master Peichin Takahara, learned Chinese boxing under the famous military attach&ecute; known as Kusanku. The blend of the circular, defensive open hand style of the Chinese with the more offensive, closed handed style of the Okinawa's was to become known as tode (karate). Sakagawa became known as Karate (tode) Sakagawa.</p>
                    <p>Three fighting styles were named after the villages where they developed. From Naha came Naha-te or Shorei-ryu, from Shuri came Shuri-te or Shorin-ryu and from Tomari came Tomari-te (later absorbed into Shorin-ryu). Some considered the original Naha styles preferable for larger stronger people and the styles from Shuri best for those smaller and quicker. Most karate systems can trace their origin to one or all of these villages.</p>
                    <p>Karate came out of hiding and into the public school system in 1903 as part of the curriculum. Then in 1915 an Okinawan schoolteacher named Gichin Funakoshi demonstrated karate in Japan. Funakoshi returned to Japan in 1922 to stay and teach the art. After World War II military personnel from around the world were introduced to the different styles of karate while stationed in Japan and Okinawa. Now karate has spread throughout the world where countless people are enjoying the benefits it offers.</p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Karate History
        </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    <img className='float-right pl-3 pb-3' src={karateImage} /><p>The origin of karate is obscured by myths and legends, but some facts are known. One legend states that at the time karate was developing there were many scoundrels that would rob or kill travelers whether they were monks or beggars. The monks were not recognized as clergyman by the people at this time and they were as likely to be killed by the robbers as anyone. Since monks were not allowed to carry weapons they were taught various forms of self-defense at the monasteries along with their Buddhist religion.</p>
                    <p>Another legend says the art of karate was taught in secret for hundreds of years in Okinawa. Japan gained control over the island over 400 years ago. They confiscated everything resembling a weapon and blacksmiths were forbidden to manufacture any edged weapons. Karate, however, remained secret and underground. Through the centuries, Japanese invaders were found dead. Stories and rumors spread, and the only facts known about karate in the outside world were statistics of the number of invaders falling victim to its practitioners.</p>
                    <p>Karate remained secret on Okinawa until 1901 when Master Itosu opened the first karate school on the island. Ginchin Funakoshi was trained in this school and in 1916 he took karate to Japan in a series of demonstrations. They were so successful that he remained in Japan and established a style known as Shotokan. The Japanese systemized and established sport karate which has spread rapidly over the western world since the end of World War II.</p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      History of Isshinryu
        </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                    <img className='float-right pl-3 pb-3' src={shimabuku_sai} /><p>Tatsuo Shimabuku was born on September 19, 1908, in Chun Village, Okinawa. At the age of 8, he began training with his uncle in Shuri-Te. He began his Karate training because his older brother would frequently torment and bully him. After a few short months in Karate, his brother no longer posed a problem for the young Shimabuku. He later studied Shorin-Ryu under Chotoku Kyan, Goju-Ryu with Chojun Miyagi, and Shorei-Ryu under Choki Motobu. Later in his life, he studied Okinawan Kobudo with the famous master Shinken Taira, from whom he learned the techniques of the bo and sai. Master Shimabuku was an 8th Dan (red and white belt) in Shorin-Ryu and also developed considerable skill in Goju-Ryu and Shorei-Ryu. From Kyan, Shimabuku learned Seisan, Naihanchi, Wansu, Chinto, Kusanku, and Tokumine No Kun (Bo #1) kata. From Miyagi, he learned Seiuchin and Sanchin, and from Motobu, he learned his version of Naihanchi kata, as well as fighting techniques and how to properly train with the makiwara. From Shinken Taira, Shimabuku learned the following weapons kata: Chatanyara No Sai, Urashi Bo (Bo #2), Shishi No Kun (Bo #3), Mi Yoshi Bo, Tsu Yoi Bo, Hamahiga No Tuifa (tonfa), Takusan No Ki (nunchaku), Kiken No Ki (nunchaku), and a kama kata. Shimabuku later incorporated two additional kata into his repertoire: Sunsu and Kusanku Sai. Sunsu Kata was a combination of the other seven Isshinryu empty-hand kata as well as many of Master Shimabuku's favorite fighting techniques.</p>
                    <p>During World War II, Master Shimabuku taught Karate to the Japanese Imperial Marines. His small business was destroyed during the war and afterwards, he worked for one of his students transporting bricks to the construction site of the new Kadena Airbase. At this time, he also began to teach an eclectic style of Karate called Chan Mighwa-Te (Small Eyed Kyan's Karate), which was a combination of Shorin-Ryu and Goju-Ryu, named in homage of Master Shimabuku's most pervasive Karate influence, Chotoku Kyan, who died in 1945 as a result of starvation from the war. Master Shimabuku began experimenting with a number of new, innovative techniques, most notably the vertical punch and block which he later added to his new system of Karate. He still taught the traditional twist punch and block in Chan Mighwa-Te.</p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Shimabuku
        </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body">
                    <img className='float-right pl-3 pb-3' src={shimabuku_bust} /><p>On January 15, 1956, he officially announced the formation of a new style of Karate, Isshinryu, meaning "One-Heart Method." He chose this name because, according to Shimabuku, "all things begin with One." Beginning in 1955, Shimabuku began to instruct a number of U.S. Marines in his front yard in Kyan Village. In February 1956, Don Nagle became the first American of note to train with Master Shimabuku at his original dojo. In 1957, Harold Long also began training with Master Shimabuku in Kyan Village. In 1958, the dojo was moved to Agena in order to be closer to the military bases and Master Shimabuku secured a contract with the U.S. Special Services to teach Karate to the U.S. Marines for $250 each month. In March 1958, Harold Mitchum began training at the Agena Dojo and he soon became Master Shimabuku's #1 American student. Other Americans of note who trained with Master Shimabuku while serving with the Marine Corps in the early 1960s include Arsenio J. Advincula, Don Bohan, Ed Johnson, Steve Armstrong, John Bartusevics, Ralph Bove, Tom Lewis, and Sherman Harrill.</p>
                    <p>In 1961, Master Shimabuku, Harold Mitchum, Steve Armstrong, and several others formed the American-Okinawan Karate Association (AOKA). Mitchum was the first AOKA president and Steve Armstrong and Ralph Bove were association officers. Harold Long was later appointed as the U.S. representative of the AOKA and A.J. Advincula was the vice-president of the association in 1963. Throughout the 1960s, Master Shimabuku continued to teach Isshinryu to the Marines on Okinawa. Many of his American students returned to the United States and opened dojos of their own. In 1964, Master Shimabuku made his first trip to the United States, staying for 3 months in Pittsburgh with Jim Morabeto. He traveled to the United States again in 1966, spending time with Steve Armstrong in Tacoma, Washington; Harold Long in Knoxville, Tennessee; and Don Nagle in Jersey City, New Jersey. At this time, all three were promoted to 8th Dan by Master Shimabuku. Harold Mitchum was promoted to 8th Dan while still training on Okinawa. Steve Armstrong also filmed Master Shimabuku performing all 14 Isshinryu kata. Because Master Shimabuku did not enjoy traveling, he sent his son-in-law, Angi Uezu, as his personal representative in 1967. Uezu spent a year teaching at dojos in New York, Ohio, Pennsylvania, and Tennessee. In 1969, Toby Cooling traveled to Okinawa to train with Master Shimabuku. Prior to returning to the United States, he was promoted to 6th Dan, becoming the last red and white belt promoted by Master Shimabuku. In 1971, Cooling formed the Order of Isshinryu (OI), which has been regarded as having hard-core training protocols and producing a number of excellent black belts, including Aston Hugh and Maria Menendez.</p>
                    <p>During August 1974, Master Kichiro Shimabuku, Tatsuo's eldest son, formed the Isshinryu World Karate Association (IWKA) with his father's blessing. He sent out a letter to all Isshinryu practitioners that all ranks awarded prior to August 31, 1974 would be considered valid, but all ranks awarded thereafter must be in the IWKA in order to be recognized. Many Isshinryu karate-ka continued to support Master Shimabuku and the IWKA. Beginning in 1973, both Tatsuo and Kichiro Shimabuku signed the AOKA and later the IWKA membership and promotion certificates, signifying Tatsuo Shimabuku's approval of the new association. During December 1974, Harold Long traveled to Okinawa to seek Master Shimabuku's permission to create a new Isshinryu association in the United States. Long and a number of other high-ranking American Isshinryu black belts then formed the International Isshinryu Karate Association (IIKA).</p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header" id="headingFive">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Isshinryu
        </button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                  <div class="card-body">
                    <img className='float-right pl-3 pb-3' src={agena_outside} /><p>On May 30, 1975, Master Tatsuo Shimabuku passed away at his home in Agena, Okinawa, after suffering a stroke. His eldest son, Kichiro Shimabuku, inherited the reigns of Isshinryu Karate, the rank of 10th Dan. After Master Shimabuku's death, Isshinryu splintered with a number of associations and independent dojos. Steve Armstrong continued the operation of the American-Okinawan Karate Association (AOKA), along with Lou Lizotte and Willie Adams. In March 1977, Harold Mitchum, Ed Johnson, A.J. Advincula, and Milledge Murphey formed the United Isshinryu Karate Association (UIKA), and Don Nagle formed the United Isshinryu Karate Federation (UIKF). In 1980, Harold Long created the Isshinryu Hall of Fame, with Master Tatsuo Shimabuku as the first inductee and Harold Long as the first American inductee in 1981. Other notable inductees in the Hall of Fame include Steve Armstrong, Don Nagle, Harold Mitchum, Joel Buchholtz, Toby Cooling, Joel Chandler, and Ed McGrath. In 1989, Angi Uezu left the IWKA and formed the Okinawa Isshinryu Karate and Kobudo Association (OIKKA). He soon became one of the chief proponents of Isshinryu Karate on Okinawa.</p>
                    <p>During a National UIKA Seminar in Atlanta, Georgia in August 1990, Milledge Murphey and his black belts became dissatisfied with the association's perceived shift towards commercialism and modifications to the traditional Isshinryu system. They decided to formalize their group, the Isshinryu Brotherhood (IB), on October 27, 1990. The IB is the largest yudanshakai in the Isshinryu World Karate Association (IWKA) and has as its goal the preservation and promulgation of totally traditional Isshinryu in a totally non-profit, non-commercial atmosphere. Joel Chandler and his black belts were also dismayed with the UIKA and left the association to form the Tatsuo-Kan Society (TKS) during 1991. Currently (1997), the IB has 52 black belt members and 225 kyu grades, and the TKS has over 1000 members. The UIKA is still active, with Harold Mitchum continuing to serve as its director.</p>
                    <p>During 1994, Toby Cooling and J.C. Burris, promoted to 9th Dan by Harold Long and Don Nagle, formed the United Isshinryu Council (UIC), providing an umbrella organization for Isshinryu Karate in the United States. The UIC is comprised of the International Isshinryu Karate Association (IIKA), the United Isshinryu Karate Federation (UIKF), the Order of Isshinryu (OI), and the Tatsuo-Kan Society (TKS). The UIC sponsors the annual Isshinryu Hall of Fame Tournament and Banquet in Pigeon Forge, Tennessee. To date, the UIC has made great strides in uniting Isshinryu Karate in the United States. On August 18, 1996, the Isshinryu Brotherhood hosted the 1996 Isshinryu World Karate Championships at the University of Florida in Gainesville. Master Shimabuku was flown in to conduct a clinic. International Isshinryu Headquarters is currently (1997) located in Gushikawa City, Okinawa, and is directed by O'Sensei Kichiro Shimabuku (10th Dan). The Isshinryu World Karate Association presently has over 26,000 life members.</p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* <section>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#early">Early Karate History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#karate">Karate History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#historyIss">History of Isshinryu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#shimabuku">Shimabuku</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#isshinryu">Isshinryu</a>
              </li>
            </ul>


            <div className="tab-content mt-5">
              <div id="early" className="container tab-pane active mt-3">
                <h2>Early Karate History</h2>
                <p>Unfortunately there was little written about the early development of martial arts. Most of the history we have learned has been orally transmitted down through the centuries from teacher to student. A need for the refinement of fighting techniques came about due to mans basic survival instinct and the defense of family and possessions.</p>
                <p>Okinawa, the largest of the Ryukyu Islands is strategically located between China and Japan. Both countries have occupied the islands at different times throughout history. Okinawan/Japanese karate had influences from many parts of the world, especially China. At the end of the 5th century A.D. a Buddhist priest by the name of Bodhidharma (Daruma in Japanese) traveled to China from India where he taught monks meditation and basic Indian fighting exercises. These moves evolved into what was later to become known as kung fu, Chu'an-fa, kempo and Chinese Boxing. Chinese boxing eventually made it's way to Okinawa.</p>
                <p>Okinawa had its own form of martial art; an aggressive closed fisted style known as te (hand). The king of Okinawa outlawed the possession of weapons in the mid fourteen hundreds. In 1609 the Satsuma clan of Japan invaded and, to control the population, reinstated the ban on owning weapons and training in the martial arts. Anyone caught disobeying would be severely punished. This resulted in te being practiced in secrecy. These bans accelerated the development of te as a way to fight oppression.</p>
                <p>In the mid 1800's Satsunuku Sakagawa, the number one student of te master Peichin Takahara, learned Chinese boxing under the famous military attach&ecute; known as Kusanku. The blend of the circular, defensive open hand style of the Chinese with the more offensive, closed handed style of the Okinawa's was to become known as tode (karate). Sakagawa became known as Karate (tode) Sakagawa.</p>
                <p>Three fighting styles were named after the villages where they developed. From Naha came Naha-te or Shorei-ryu, from Shuri came Shuri-te or Shorin-ryu and from Tomari came Tomari-te (later absorbed into Shorin-ryu). Some considered the original Naha styles preferable for larger stronger people and the styles from Shuri best for those smaller and quicker. Most karate systems can trace their origin to one or all of these villages.</p>
                <p>Karate came out of hiding and into the public school system in 1903 as part of the curriculum. Then in 1915 an Okinawan schoolteacher named Gichin Funakoshi demonstrated karate in Japan. Funakoshi returned to Japan in 1922 to stay and teach the art. After World War II military personnel from around the world were introduced to the different styles of karate while stationed in Japan and Okinawa. Now karate has spread throughout the world where countless people are enjoying the benefits it offers.</p>
              </div>
              <div id="karate" className="container tab-pane fade mt-3">
                <h2>Karate History</h2>
                <p>The origin of karate is obscured by myths and legends, but some facts are known. One legend states that at the time karate was developing there were many scoundrels that would rob or kill travelers whether they were monks or beggars. The monks were not recognized as clergyman by the people at this time and they were as likely to be killed by the robbers as anyone. Since monks were not allowed to carry weapons they were taught various forms of self-defense at the monasteries along with their Buddhist religion.</p>
                <p>Another legend says the art of karate was taught in secret for hundreds of years in Okinawa. Japan gained control over the island over 400 years ago. They confiscated everything resembling a weapon and blacksmiths were forbidden to manufacture any edged weapons. Karate, however, remained secret and underground. Through the centuries, Japanese invaders were found dead. Stories and rumors spread, and the only facts known about karate in the outside world were statistics of the number of invaders falling victim to its practitioners.</p>
                <p>Karate remained secret on Okinawa until 1901 when Master Itosu opened the first karate school on the island. Ginchin Funakoshi was trained in this school and in 1916 he took karate to Japan in a series of demonstrations. They were so successful that he remained in Japan and established a style known as Shotokan. The Japanese systemized and established sport karate which has spread rapidly over the western world since the end of World War II.</p>
              </div>
              <div id="historyIss" className="container tab-pane fade mt-3">
                <h2>History of Isshinryu</h2>
                <p>Tatsuo ShimabukuTatsuo Shimabuku was born on September 19, 1908, in Chun Village, Okinawa. At the age of 8, he began training with his uncle in Shuri-Te. He began his Karate training because his older brother would frequently torment and bully him. After a few short months in Karate, his brother no longer posed a problem for the young Shimabuku. He later studied Shorin-Ryu under Chotoku Kyan, Goju-Ryu with Chojun Miyagi, and Shorei-Ryu under Choki Motobu. Later in his life, he studied Okinawan Kobudo with the famous master Shinken Taira, from whom he learned the techniques of the bo and sai. Master Shimabuku was an 8th Dan (red and white belt) in Shorin-Ryu and also developed considerable skill in Goju-Ryu and Shorei-Ryu. From Kyan, Shimabuku learned Seisan, Naihanchi, Wansu, Chinto, Kusanku, and Tokumine No Kun (Bo #1) kata. From Miyagi, he learned Seiuchin and Sanchin, and from Motobu, he learned his version of Naihanchi kata, as well as fighting techniques and how to properly train with the makiwara. From Shinken Taira, Shimabuku learned the following weapons kata: Chatanyara No Sai, Urashi Bo (Bo #2), Shishi No Kun (Bo #3), Mi Yoshi Bo, Tsu Yoi Bo, Hamahiga No Tuifa (tonfa), Takusan No Ki (nunchaku), Kiken No Ki (nunchaku), and a kama kata. Shimabuku later incorporated two additional kata into his repertoire: Sunsu and Kusanku Sai. Sunsu Kata was a combination of the other seven Isshinryu empty-hand kata as well as many of Master Shimabuku's favorite fighting techniques.</p>
                <p>During World War II, Master Shimabuku taught Karate to the Japanese Imperial Marines. His small business was destroyed during the war and afterwards, he worked for one of his students transporting bricks to the construction site of the new Kadena Airbase. At this time, he also began to teach an eclectic style of Karate called Chan Mighwa-Te (Small Eyed Kyan's Karate), which was a combination of Shorin-Ryu and Goju-Ryu, named in homage of Master Shimabuku's most pervasive Karate influence, Chotoku Kyan, who died in 1945 as a result of starvation from the war. Master Shimabuku began experimenting with a number of new, innovative techniques, most notably the vertical punch and block which he later added to his new system of Karate. He still taught the traditional twist punch and block in Chan Mighwa-Te.</p>
              </div>
              <div id="shimabuku" className="container tab-pane fade mt-3">
                <h2>Shimabuku</h2>
                <p>On January 15, 1956, he officially announced the formation of a new style of Karate, Isshinryu, meaning "One-Heart Method." He chose this name because, according to Shimabuku, "all things begin with One." Beginning in 1955, Shimabuku began to instruct a number of U.S. Marines in his front yard in Kyan Village. In February 1956, Don Nagle became the first American of note to train with Master Shimabuku at his original dojo. In 1957, Harold Long also began training with Master Shimabuku in Kyan Village. In 1958, the dojo was moved to Agena in order to be closer to the military bases and Master Shimabuku secured a contract with the U.S. Special Services to teach Karate to the U.S. Marines for $250 each month. In March 1958, Harold Mitchum began training at the Agena Dojo and he soon became Master Shimabuku's #1 American student. Other Americans of note who trained with Master Shimabuku while serving with the Marine Corps in the early 1960s include Arsenio J. Advincula, Don Bohan, Ed Johnson, Steve Armstrong, John Bartusevics, Ralph Bove, Tom Lewis, and Sherman Harrill.</p>
                <p>In 1961, Master Shimabuku, Harold Mitchum, Steve Armstrong, and several others formed the American-Okinawan Karate Association (AOKA). Mitchum was the first AOKA president and Steve Armstrong and Ralph Bove were association officers. Harold Long was later appointed as the U.S. representative of the AOKA and A.J. Advincula was the vice-president of the association in 1963. Throughout the 1960s, Master Shimabuku continued to teach Isshinryu to the Marines on Okinawa. Many of his American students returned to the United States and opened dojos of their own. In 1964, Master Shimabuku made his first trip to the United States, staying for 3 months in Pittsburgh with Jim Morabeto. He traveled to the United States again in 1966, spending time with Steve Armstrong in Tacoma, Washington; Harold Long in Knoxville, Tennessee; and Don Nagle in Jersey City, New Jersey. At this time, all three were promoted to 8th Dan by Master Shimabuku. Harold Mitchum was promoted to 8th Dan while still training on Okinawa. Steve Armstrong also filmed Master Shimabuku performing all 14 Isshinryu kata. Because Master Shimabuku did not enjoy traveling, he sent his son-in-law, Angi Uezu, as his personal representative in 1967. Uezu spent a year teaching at dojos in New York, Ohio, Pennsylvania, and Tennessee. In 1969, Toby Cooling traveled to Okinawa to train with Master Shimabuku. Prior to returning to the United States, he was promoted to 6th Dan, becoming the last red and white belt promoted by Master Shimabuku. In 1971, Cooling formed the Order of Isshinryu (OI), which has been regarded as having hard-core training protocols and producing a number of excellent black belts, including Aston Hugh and Maria Menendez.</p>
                <p>During August 1974, Master Kichiro Shimabuku, Tatsuo's eldest son, formed the Isshinryu World Karate Association (IWKA) with his father's blessing. He sent out a letter to all Isshinryu practitioners that all ranks awarded prior to August 31, 1974 would be considered valid, but all ranks awarded thereafter must be in the IWKA in order to be recognized. Many Isshinryu karate-ka continued to support Master Shimabuku and the IWKA. Beginning in 1973, both Tatsuo and Kichiro Shimabuku signed the AOKA and later the IWKA membership and promotion certificates, signifying Tatsuo Shimabuku's approval of the new association. During December 1974, Harold Long traveled to Okinawa to seek Master Shimabuku's permission to create a new Isshinryu association in the United States. Long and a number of other high-ranking American Isshinryu black belts then formed the International Isshinryu Karate Association (IIKA).</p>
              </div>
              <div id="isshinryu" className="container tab-pane fade mt-3">
                <h2>Isshinryu</h2>
                <p>On May 30, 1975, Master Tatsuo Shimabuku passed away at his home in Agena, Okinawa, after suffering a stroke. His eldest son, Kichiro Shimabuku, inherited the reigns of Isshinryu Karate, the rank of 10th Dan. After Master Shimabuku's death, Isshinryu splintered with a number of associations and independent dojos. Steve Armstrong continued the operation of the American-Okinawan Karate Association (AOKA), along with Lou Lizotte and Willie Adams. In March 1977, Harold Mitchum, Ed Johnson, A.J. Advincula, and Milledge Murphey formed the United Isshinryu Karate Association (UIKA), and Don Nagle formed the United Isshinryu Karate Federation (UIKF). In 1980, Harold Long created the Isshinryu Hall of Fame, with Master Tatsuo Shimabuku as the first inductee and Harold Long as the first American inductee in 1981. Other notable inductees in the Hall of Fame include Steve Armstrong, Don Nagle, Harold Mitchum, Joel Buchholtz, Toby Cooling, Joel Chandler, and Ed McGrath. In 1989, Angi Uezu left the IWKA and formed the Okinawa Isshinryu Karate and Kobudo Association (OIKKA). He soon became one of the chief proponents of Isshinryu Karate on Okinawa.</p>
                <p>During a National UIKA Seminar in Atlanta, Georgia in August 1990, Milledge Murphey and his black belts became dissatisfied with the association's perceived shift towards commercialism and modifications to the traditional Isshinryu system. They decided to formalize their group, the Isshinryu Brotherhood (IB), on October 27, 1990. The IB is the largest yudanshakai in the Isshinryu World Karate Association (IWKA) and has as its goal the preservation and promulgation of totally traditional Isshinryu in a totally non-profit, non-commercial atmosphere. Joel Chandler and his black belts were also dismayed with the UIKA and left the association to form the Tatsuo-Kan Society (TKS) during 1991. Currently (1997), the IB has 52 black belt members and 225 kyu grades, and the TKS has over 1000 members. The UIKA is still active, with Harold Mitchum continuing to serve as its director.</p>
                <p>During 1994, Toby Cooling and J.C. Burris, promoted to 9th Dan by Harold Long and Don Nagle, formed the United Isshinryu Council (UIC), providing an umbrella organization for Isshinryu Karate in the United States. The UIC is comprised of the International Isshinryu Karate Association (IIKA), the United Isshinryu Karate Federation (UIKF), the Order of Isshinryu (OI), and the Tatsuo-Kan Society (TKS). The UIC sponsors the annual Isshinryu Hall of Fame Tournament and Banquet in Pigeon Forge, Tennessee. To date, the UIC has made great strides in uniting Isshinryu Karate in the United States. On August 18, 1996, the Isshinryu Brotherhood hosted the 1996 Isshinryu World Karate Championships at the University of Florida in Gainesville. Master Shimabuku was flown in to conduct a clinic. International Isshinryu Headquarters is currently (1997) located in Gushikawa City, Okinawa, and is directed by O'Sensei Kichiro Shimabuku (10th Dan). The Isshinryu World Karate Association presently has over 26,000 life members.</p>
              </div>
            </div>


          </section> */}
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

}

export default History;