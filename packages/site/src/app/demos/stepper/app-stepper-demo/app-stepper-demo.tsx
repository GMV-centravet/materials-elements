import { Component, h, Host } from '@stencil/core';
        @Component({
          tag: 'app-stepper-demo',
          styleUrl: 'app-stepper-demo.scss'
        })
        export class AppStepperDemo {

          render() {
            const simpleSelectOptions = new Map().set('Football', 'Football').set('Tennis', 'Tennis').set('Curling', 'Curling');
            return (
              <Host>
                <app-demo-code-block blockTitle="Simple stepper">
                  <div slot="demo">
                      <materials-stepper>
                        <materials-step id="step1" step-title="Select a sport">
                            <materials-select outlined default-empty label="Select a sport" options={simpleSelectOptions} width="100%">
                            </materials-select>
                        </materials-step>
                        <materials-step id="step2"  step-title="Select a time">
                          <div>
                            <materials-button data-time="15:00" id="time1">15:00</materials-button>
                            <materials-button data-time="16:00" id="time1">16:00</materials-button>
                          </div>
                        </materials-step>
                        <materials-step id="step3"  isLast='true' step-title="Summary">
                          <div id="summary">

                          </div>
                        </materials-step>
                      </materials-stepper>
                  </div>
                  <script>
                    const stepperz = document.querySelector('materials-stepper');
                    const selectStep1 = document.querySelector('materials-select');
                    const stepper = document.querySelector('materials-stepper');
                    const step2 = document.querySelector('#step2');
                    const time1 = document.querySelector('#time1');
                    const time2 = document.querySelector('#time2');
                    const step3 = document.querySelector('#step3');
                    const summary = document.querySelector('#summary');
                    validateStep1 = {`
                    function() {
                      step1.status = 'valid';
                      step1.summary = selectStep1.value;
                      stepperz.nextStep();
                    }
                    `}
                    selectStep1.addEventListener('change', validateStep1);
                    validateStep2 = {`
                    function(ev) {
                      step2.status = 'valid';
                      step2.summary = ev.target.dataset.time;
                      stepperz.nextStep();
                      summary.innerHTML='You want to play ' + step1.summary + ' at ' + step2.summary;
                    }
                    `}
                    time1.addEventListener('click', validateStep2);
                    time2.addEventListener('click', validateStep2);
                  </script>
                    <code slot="code">
                      {`<div>
  <materials-stepper>
    <materials-step id="step1" step-title="Select a sport">
        <materials-select outlined default-empty label="Select a sport" options={simpleSelectOptions} width="100%">
        </materials-select>
    </materials-step>
    <materials-step id="step2"  step-title="Select a time">
      <div>
        <materials-button data-time="15:00" id="time1">15:00</materials-button>
        <materials-button data-time="16:00" id="time1">16:00</materials-button>
      </div>
    </materials-step>
    <materials-step id="step3"  isLast='true' step-title="Summary">
      <div id="summary">

      </div>
    </materials-step>
  </materials-stepper>
</div>
<script>
const stepperz = document.querySelector('materials-stepper');
const selectStep1 = document.querySelector('materials-select');
const stepper = document.querySelector('materials-stepper');
const step2 = document.querySelector('#step2');
const time1 = document.querySelector('#time1');
const time2 = document.querySelector('#time2');
const step3 = document.querySelector('#step3');
const summary = document.querySelector('#summary');
validateStep1 = {
  function() {
    step1.status = 'valid';
    step1.summary = selectStep1.value;
    stepperz.nextStep();
  }
}
selectStep1.addEventListener('change', validateStep1);
validateStep2 = {
  function(ev) {
    step2.status = 'valid';
    step2.summary = ev.target.dataset.time;
    stepperz.nextStep();
    summary.innerHTML='You want to play ' + step1.summary + ' at ' + step2.summary;
  }
}
time1.addEventListener('click', validateStep2);
time2.addEventListener('click', validateStep2);
</script>`}
                    </code>
                  </app-demo-code-block>
              </Host>
            );
          }
        }
