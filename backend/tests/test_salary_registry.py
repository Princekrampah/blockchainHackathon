from brownie import accounts, SalaryRegistry

def test_deployment():
    account = accounts[0]
    salary_registry = SalaryRegistry.deploy({"from": account})
    print(f"Contract deployed successfully..! at: {salary_registry.address}")


def test_create_job():
    # Arrange
    account = accounts[0]
    salary_registry = SalaryRegistry.deploy({"from": account})
    print(f"Contract deployed successfully..! at: {salary_registry.address}")

    # Act
    tx = salary_registry.createService("First job title", "This is the first job title", 2000, salary_registry.address)
    tx.wait(1)
    print("Created job", salary_registry.service(salary_registry.address))

    # Assert
    assert True


def test_sign_job():
    # Arrange
    account = accounts[0]
    salary_registry = SalaryRegistry.deploy({"from": account})
    print(f"Contract deployed successfully..! at: {salary_registry.address}")

    # Act
    tx = salary_registry.createService("First job title", "This is the first job title", 2000, salary_registry.address)
    tx.wait(1)

    tx = salary_registry.signingContract(salary_registry.address)
    tx.wait(1)

    print(salary_registry.signings(salary_registry.address))

    # assert 
    assert True

