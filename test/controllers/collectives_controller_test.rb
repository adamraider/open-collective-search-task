require 'test_helper'

class CollectivesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @collective = collectives(:one)
  end

  test "should get index" do
    get collectives_url, as: :json
    assert_response :success
  end

  test "should create collective" do
    assert_difference('Collective.count') do
      post collectives_url, params: { collective: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show collective" do
    get collective_url(@collective), as: :json
    assert_response :success
  end

  test "should update collective" do
    patch collective_url(@collective), params: { collective: {  } }, as: :json
    assert_response 200
  end

  test "should destroy collective" do
    assert_difference('Collective.count', -1) do
      delete collective_url(@collective), as: :json
    end

    assert_response 204
  end
end
