import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Product_DescTabs.css";
import product1_descImg from "../../assets/product1_desc_img.png";
import product1_compositionImg1 from "../../assets/product1_composition_img1.png";
import product1_compositionImg2 from "../../assets/product1_composition_img2.png";
import product1_compositionImg3 from "../../assets/product1_composition_img3.png";

const DescTabs = () => {

  function openDescriptionTab() {

    document.getElementById('descriptionTab').style.display = "block";
    document.getElementById('notesTab').style.display = "none";
    document.getElementById('compositionTab').style.display = "none";
  }
  function openNotesTab() {

    document.getElementById('notesTab').style.display = "block";
    document.getElementById('descriptionTab').style.display = "none";
    document.getElementById('compositionTab').style.display = "none";
  }
  function openCompositionTab() {

    document.getElementById('compositionTab').style.display = "block";
    document.getElementById('notesTab').style.display = "none";
    document.getElementById('descriptionTab').style.display = "none";
  }

  return (
    <div id="descTabsSection" >
      <Nav className="tabHeaders" variant="underline" defaultActiveKey="#description">
        <Nav.Item>
          <Nav.Link href="#description" onClick={openDescriptionTab}>DESCRIPTION</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#notes" onClick={openNotesTab}>NOTES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#composition" onClick={openCompositionTab}>COMPOSITION</Nav.Link>
        </Nav.Item>
      </Nav>

      <div id="descriptionTab">
          <Row className=" gap-5 descContent">
            <Col xs lg="4">
              <Row>
                <p>
                Scent type : Clean and fresh equ de toilette
                </p>
              </Row>
              <Row>
                <p>
                Fragrance Description:
              A passing rain struck in the middle of Spring. Suddenly, the sky 
              calms down, clouds disappear giving way to shy rays of sun. When 
              the Rain Stops evokes the joyful feeling of seeing the sun return 
              after the rain. The sky returns to a state of calm, raindrops
              become less frequent and gradually stop as the clouds slowly 
              disappear and give way to shy rays of sun that illuminate the wet
              surroundings.
                </p>
                <p>
                This eau de toilette is inspired by the joyful nature of Spring
              conjures the thought of the wet nature under the rays of a joyful
              rainbow. The aquatic accord signals the last remaining raindrops
              evaporating from the tips of the pine needle trees into the fresh
              air. Luminous Isparta rose and vibrant pink pepper notes blend
              blissfully and provide the heart to this perfume.
                </p>

                <p>
                The combination of the earthy scent of the Patchouli essence 
              associated with the aquatic accord is the signature of the 
              fragrance as it recreates the sensation of wet nature. The 
              Patchouli essence is a luxurious ingredient that is sustainably 
              sourced in Bali, in accordance with the highest environmental and 
              ethical standards. Its production helps local populations and 
              offers the best quality ingredient.
                </p>

                <p>
                The Isparta Rose Petal essence is also sustainably and ethically
              sourced. It offers sweet notes of fresh rose that illuminate the
              fragrance. Combined with the vibrant pink pepper, it evokes the 
              positive energy brought by the return of the sun. With this
              fragrance, the perfumer, Fanny Bal, has recreated the scent of
              fresh rain and sun rays, conveying serenity and the affirming
              message that the sun always returns after the rain: like the 
              promise of a better tomorrow.
                </p>
              </Row>
            </Col>
            <Col xs lg="7">
            <div class="productImage">
              <img src={product1_descImg} />
            </div>
            </Col>
          </Row>
      </div>
      <div id="notesTab">
          NOTES
      </div>
      <div id="compositionTab">
          <Row>
            <Col>
              <Row>
                <div class="composotionImage">
                  <img src={product1_compositionImg1} />
                </div>
              </Row>
              <Row>
                <p class="elementName">AQUATIC ACCORD</p>
              </Row>
              <Row>
                <p>
                The Aquatic accord is a creation of the 
                perfumer. It is made of the marine salty
                freshness of Calone, the aerial and green
                notes of the Aqual™ molecule, and the zesty
                freshness of Aldehydes. As a result the
                Aquatic accord is marine, salty, pure and 
                transparent , and easily evokes the freshness
                of the deep sea and the invigorating sensation 
                of diving into it.
                </p>
              </Row>
            </Col>
            <Col>
              <Row>
                <div class="composotionImage">
                  <img src={product1_compositionImg2} />
                </div>
              </Row>
              <Row>
                <p class="elementName">ISPARTA ROSE PETAL</p>
              </Row>
              <Row>
                <p>
                Isparta Rose Petal essence offers sweet
                and luminous notes of fresh rose. It is like a
                rose gorged with water that brightens the 
                heart of the perfume. This very refined
                extraction is obtained by mixing the essential
                oil with concentrated rose water, both
                obtained by hydro-distillation. This 
                extraction of Rose is sustainably sourced in
                Turkey.
                </p>
              </Row>
            </Col>
            <Col>
              <Row>
                <div class="composotionImage">
                  <img src={product1_compositionImg3} />
                </div>
              </Row>
              <Row>
                <p class="elementName">PATCHOULI BALI</p>
              </Row>
              <Row>
                <p>
                This Patchouli essence is sustainably sourced 
                in Bali in respect of highest ethical 
                standards to help local populations and to
                offer the best quality of ingredient. The
                Patchouli essence has woody earthy
                inflections. When associated with the aquatic 
                accord the patchouli evokes damp ground. It is 
                a key ingredient to evoke the wet nature after
                the rain.
                </p>
              </Row>
            </Col>
          </Row>
      </div>

    </div>
  );
};

export default DescTabs;
