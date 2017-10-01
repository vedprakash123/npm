<?php

namespace Drupal\dbtng_example;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Component\Serialization\Json;
module_load_include('inc', 'dbtng_example', 'constants/MachineName');
/**
 * Class DbtngExampleStorage.
 */
class CelcomPrepareData {

    public function getNodeType(EntityInterface $entity) {
      //module_load_include('inc', 'dbtng_example', 'constants/MachineName');
       // $obj = new CelcomPrepareData();

      switch ($entity->bundle()) {
        case TEMPLATE_ONE:
            // Template one Type
            $this->templateTypeOne($entity);
            break;

          case TEMPLATE_TWO:
            // Update Physician Account.
            //$obj->templateTypeTwo($entity);
            break;

          case TEMPLATE_THREE:
            // Update EndPoint.
            //$obj->templateTypeThree($entity);
            break;

          default:
            break;
      }

    }
  /**
   * Save an entry in the database.
   *
   * The underlying DBTNG function is db_insert().
   *
   * Exception handling is shown in this example. It could be simplified
   * without the try/catch blocks, but since an insert will throw an exception
   * and terminate your application if the exception is not handled, it is best
   * to employ try/catch.
   *
   * @param array $entity
   *   An array containing entity values.
   *
   */
  public function templateTypeOne(EntityInterface $entity) { echo '<pre>';

  if( isset($entity->get('field_banner')->subform) && !empty($entity->get('field_banner')->subform) ) {
    print_r($entity->get('field_banner')->subform);
  } 
  else {
    echo 'No Value';
  }

   die();
    $responseData = [];
    $responseData[DATA]['nid'] = $entity->get('nid')->value;
    $responseData[DATA]['title'] = $entity->get('title')->value;
    $responseData[DATA]['banner']['api'] = '/api/banner/' . $entity->get('field_banner')->subform['field_banner_type'][0][FIELD_TARGET_ID];
    $responseData[DATA]['banner']['slider'] = $entity->get('field_banner')->subform['field_is_slider_enable'][FIELD_VALUE];
    $responseData['Status'] = 'OK';
    $responseData['StatusMessage'] = 'Successfuly fetch the data';
    $data = Json::encode($responseData);
    print_r($data); die();
  }
  /**
   * Save an entry in the database.
   *
   * The underlying DBTNG function is db_insert().
   *
   * Exception handling is shown in this example. It could be simplified
   * without the try/catch blocks, but since an insert will throw an exception
   * and terminate your application if the exception is not handled, it is best
   * to employ try/catch.
   *
   * @param array $entity
   *   An array containing entity values.
   *
   */
  public function templateTypeTwo(EntityInterface $entity) {
    $responseData = [];
    $responseData['data']['nid'] = $entity->get('nid')->value;
    $responseData['data']['title'] = $entity->get('title')->value;
    $responseData['data']['banner']['api'] = '/api/banner/' . $entity->get('field_banner')->subform['field_banner_type'][0]['target_id'];
    $responseData['data']['banner']['slider'] = $entity->get('field_banner')->subform['field_is_slider_enable']['value'];
    $responseData['Status'] = 'OK';
    $responseData['StatusMessage'] = 'Successfuly fetch the data';
    $data = Json::encode($responseData);
    print_r($data); die();
  }

  public function templateTypeThree(EntityInterface $entity) {
    $responseData = [];
    $responseData['data']['nid'] = $entity->get('nid')->value;
    $responseData['data']['title'] = $entity->get('title')->value;
    $responseData['data']['banner']['api'] = '/api/banner/' . $entity->get('field_banner')->subform['field_banner_type'][0]['target_id'];
    $responseData['data']['banner']['slider'] = $entity->get('field_banner')->subform['field_is_slider_enable']['value'];
    $responseData['Status'] = 'OK';
    $responseData['StatusMessage'] = 'Successfuly fetch the data';
    $data = Json::encode($responseData);
    print_r($data); die();
  }

}
