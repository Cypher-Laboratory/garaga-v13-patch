import * as garaga_rs from 'garaga_rs';

async function main() {
  await garaga_rs.init();
  const result = garaga_rs.msmCalldataBuilder([[1n, 2n]], [10n], garaga_rs.CurveId.BN254);
  const json = JSON.stringify(result, (key, value) => typeof value === 'bigint' ? value + 'n' : value, 2);
  const message = 'Output of msm_calldata_builder: ' + json;
  const element = document.createElement('pre');
  element.textContent = message;
  document.body.appendChild(element);
}

main()
  .catch(console.error);
